import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Modal, Grow } from '@mui/material';
import { useGetImagesQuery, useGetRoversQuery } from '../../services/NASA';
import { LoadingSpinner } from '../../components/index';
import roverImages from '../../assets/images';

import useStyles from './styles';

const Rovers = () => {
  const classes = useStyles();

  const { data, isFetching, error } = useGetRoversQuery();
  console.log(data);
  return (
    <Grid container className={classes.roversContainer}>
      {isFetching ? (
        <Modal aria-labelledby="Loading" open={true}>
          <Box className={classes.loadingModal}>
            <LoadingSpinner />
          </Box>
        </Modal>
      ) : data?.rovers ? (
        data?.rovers?.map(
          ({
            name,
            status,
            launch_date,
            landing_date,
            max_date,
            cameras,
            total_photos,
          }) => (
            <Grow in timeout={1000} key={name}>
              <Link to={`/rovers/${name.toLowerCase()}`}>
                <Grid item md={6} className={classes.roverContainer}>
                  <Box>
                    <Typography variant="h5">{name}</Typography>
                  </Box>
                  <Box className={classes.roverInfoContainer}>
                    <Box className={classes.statsContainer}>
                      <Typography variant="h6">Stats:</Typography>
                      <Typography variant="body1">
                        Status:{' '}
                        <span
                          className={
                            status === 'active' ? classes.green : classes.red
                          }
                        >
                          {status}
                        </span>
                      </Typography>
                      <Typography variant="body1">
                        Launch Date:{' '}
                        {launch_date.split('-').reverse().join('/')}
                      </Typography>
                      <Typography variant="body1">
                        Landing Date:{' '}
                        {landing_date.split('-').reverse().join('/')}
                      </Typography>
                      <Typography variant="body1">
                        Mission End Date:{' '}
                        {max_date.split('-').reverse().join('/')}
                      </Typography>
                      <Typography variant="body1">
                        No. of Cameras: {cameras.length}
                      </Typography>
                      <Typography variant="body1">
                        Total Photos: {total_photos}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <img
                      src={roverImages[name.toLowerCase()]}
                      alt={`${name}`}
                      className={classes.roverImage}
                    />
                  </Box>
                </Grid>
              </Link>
            </Grow>
          )
        )
      ) : (
        console.log(error)
      )}
    </Grid>
  );
};

export default Rovers;
