import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Modal, Button } from '@mui/material';

import useStyles from './styles';

import { LoadingSpinner, ImageContainer } from '../../components/index';
import { useGetImagesQuery, useGetRoverQuery } from '../../services/NASA';
import roverImages from '../../assets/images';

function incrementDate(earthDate) {
  const date = new Date(earthDate);
  const mili = date.setDate(date.getDate() + 1);
  const dateObject = new Date(mili);
  const humanDateFormat = dateObject
    .toLocaleString()
    .slice(0, 10)
    .split('/')
    .reverse()
    .join('-');
  return humanDateFormat;
}

function decrementDate(earthDate) {
  const date = new Date(earthDate);
  const mili = date.setDate(date.getDate() - 1);
  const dateObject = new Date(mili);
  const humanDateFormat = dateObject
    .toLocaleString()
    .slice(0, 10)
    .split('/')
    .reverse()
    .join('-');
  return humanDateFormat;
}

const Rover = () => {
  const classes = useStyles();

  const { rover } = useParams();
  const [earthDate, setEarthDate] = useState('1979-01-01');
  if (earthDate === undefined) {
    setEarthDate('1979-01-01');
  }

  const { data: roverInfo } = useGetRoverQuery({
    rover,
  });

  const { data, isFetching } = useGetImagesQuery({
    rover,
    earthDate,
  });

  useEffect(() => {
    setEarthDate(roverInfo?.rover?.landing_date);
  }, [roverInfo]);

  // Array to hold unique cameras
  let camerasPresent = [];

  return (
    <>
      {isFetching ? (
        <Modal aria-labelledby="Loading" open={true}>
          <Box className={classes.loadingModal}>
            <LoadingSpinner />
          </Box>
        </Modal>
      ) : (
        <Grid container>
          <Grid
            item
            md={8}
            sx={{
              padding: '10px 10px',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            className={classes.imagesGrid}
          >
            <Grid item md={12}>
              {/* Page Title */}
              {data?.photos.length > 1 ? (
                <Typography variant="h2" className={classes.pageTitle}>
                  Available Cameras
                  <Typography variant="body1" className={classes.pageTitle}>
                    Images taken on{' '}
                    {data?.photos[0]?.earth_date.split('-').reverse().join('/')}{' '}
                    (Sol {data?.photos[0]?.sol})
                  </Typography>
                </Typography>
              ) : (
                <>
                  <Typography variant="h2" className={classes.pageTitle}>
                    No Cameras Available
                  </Typography>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Try another date
                    </Typography>
                    {roverInfo?.rover?.landing_date === earthDate ? (
                      setEarthDate(incrementDate(earthDate))
                    ) : (
                      <input
                        type="date"
                        value={earthDate}
                        onChange={(e) => setEarthDate(e.target.value)}
                        min={data?.photos[0]?.rover?.landing_date}
                        max={new Date().toISOString().slice(0, 10)}
                        className={classes.dateInput}
                      />
                    )}
                  </Box>
                </>
              )}
            </Grid>

            {/* Available unique cameras */}

            {data?.photos.map(({ img_src, camera, id }) =>
              camerasPresent.includes(camera?.name) ? null : (
                <Grid
                  item
                  md={3}
                  key={camera?.name}
                  sx={{ marginTop: '10px', padding: '5px' }}
                >
                  <ImageContainer
                    imgSrc={img_src}
                    imgTitle={camera?.full_name}
                    title={camera?.full_name}
                    i={id}
                  />
                  {/* Pushes the camera into the camerasPresent array */}
                  {camerasPresent.push(camera?.name)}
                </Grid>
              )
            )}
          </Grid>
          <Grid item md={4} className={classes.infoGrid}>
            <Grid item md={12} className={classes.FlexRowCenter}>
              <Box className={classes.infoContainer}>
                <Typography className={classes.title} variant="h5">
                  {roverInfo?.rover?.name}
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Mission Status:{' '}
                  <span
                    className={
                      roverInfo?.rover?.status === 'active'
                        ? classes.green
                        : classes.red
                    }
                  >
                    {roverInfo?.rover?.status.slice(0, 1).toUpperCase()}
                    {roverInfo?.rover?.status.slice(1)}
                  </span>
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Launch Date:{' '}
                  {roverInfo?.rover?.launch_date.split('-').reverse().join('/')}
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Mission Start:{' '}
                  {roverInfo?.rover?.landing_date
                    .split('-')
                    .reverse()
                    .join('/')}
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Mission End:{' '}
                  {roverInfo?.rover?.max_date.split('-').reverse().join('/')}
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Number of Cameras: {roverInfo?.rover?.cameras.length}
                </Typography>
                <Typography className={classes.title} variant="body1">
                  Pictures taken: {roverInfo?.rover?.total_photos}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={12}
              className={classes.FlexRowCenter}
              sx={{ marginTop: '10px' }}
            >
              <Box>
                <ImageContainer
                  imgSrc={roverImages[roverInfo?.rover?.name.toLowerCase()]}
                  i={roverInfo?.rover?.id}
                />
              </Box>
            </Grid>
            <Grid item md={12} sx={{ textAlign: 'center' }}>
              {isFetching ? (
                <LoadingSpinner />
              ) : (
                <>
                  <input
                    type="date"
                    value={earthDate}
                    onChange={(e) => setEarthDate(e.target.value)}
                    min={data?.photos[0]?.rover?.landing_date}
                    max={new Date().toISOString().slice(0, 10)}
                    className={classes.dateInput}
                  />
                  <Box>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ margin: 'auto 5px' }}
                      onClick={() => setEarthDate(decrementDate(earthDate))}
                    >
                      Prev Day
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ margin: 'auto 5px' }}
                      onClick={() => setEarthDate(incrementDate(earthDate))}
                    >
                      Next Day
                    </Button>
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Rover;
