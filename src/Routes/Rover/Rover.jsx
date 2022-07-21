import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Modal } from '@mui/material';

import useStyles from './styles';

import { LoadingSpinner, ImageContainer } from '../../components/index';
import { useGetImagesQuery, useGetRoverQuery } from '../../services/NASA';
import roverImages from '../../assets/images';

const Rover = () => {
  const { rover } = useParams();
  const [earthDate, setEarthDate] = useState('1979-01-01');

  const classes = useStyles();
  const { data: roverInfo, isFetching: roverInfoFetching } = useGetRoverQuery({
    rover,
  });
  const { data, isFetching } = useGetImagesQuery({
    rover,
    earthDate,
  });

  console.log(data);

  // Array to hold unique cameras
  let camerasPresent = [];

  useEffect(() => {
    if (rover === 'curiosity') {
      setEarthDate('2012-08-06');
    }
    if (rover === 'opportunity') {
      setEarthDate('2004-01-26');
    }
    if (rover === 'spirit') {
      setEarthDate('2004-01-05');
    }
    if (rover === 'perseverance') {
      setEarthDate('2021-02-18');
    }
  }, [rover]);

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
                    <input
                      type="date"
                      value={earthDate}
                      onChange={(e) => setEarthDate(e.target.value)}
                      min={data?.photos[0]?.rover?.landing_date}
                      max={new Date().toISOString().slice(0, 10)}
                      className={classes.dateInput}
                    />
                  </Box>
                </>
              )}
            </Grid>

            {/* Available unique cameras */}
            {isFetching ? (
              <Grid item md={12}>
                <LoadingSpinner />
              </Grid>
            ) : (
              data?.photos.map(({ img_src, camera }) =>
                // if a camera is already in the camerasPresent array, it is skipped
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
                    />
                    {/* Pushes the camera into the camerasPresent array */}
                    {camerasPresent.push(camera?.name)}
                  </Grid>
                )
              )
            )}
          </Grid>
          <Grid item md={4}>
            <Grid item md={12} className={classes.FlexRowCenter}>
              {roverInfoFetching ? (
                <Box sx={{ margin: 'auto' }}>
                  <LoadingSpinner />
                </Box>
              ) : (
                <Box className={classes.infoContainer}>
                  <Typography className={classes.title} variant="h5">
                    {roverInfo?.rover?.name}
                  </Typography>
                  <Typography className={classes.title} variant="body1">
                    Status:{' '}
                    <span
                      className={
                        roverInfo?.rover?.status === 'active'
                          ? classes.green
                          : classes.red
                      }
                    >
                      {roverInfo?.rover?.status}
                    </span>
                  </Typography>
                  <Typography className={classes.title} variant="body1">
                    Launch Date:{' '}
                    {roverInfo?.rover?.launch_date
                      .split('-')
                      .reverse()
                      .join('/')}
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
              )}
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
                />
              </Box>
            </Grid>
            <Grid item md={12} sx={{ textAlign: 'center' }}>
              {isFetching ? (
                <LoadingSpinner />
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
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Rover;
