import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Modal } from '@mui/material';
import { useGetImagesQuery, useGetRoversQuery } from '../../services/NASA';
import { LoadingSpinner, ImageContainer } from '../../components/index';
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
            <Link to={`/rovers/${name.toLowerCase()}`} key={name}>
              <Grid item md={5} className={classes.roverContainer}>
                <Box>
                  <Typography variant="h5">{name}</Typography>
                </Box>
                <Box className={classes.roverInfoContainer}>
                  <Box>
                    <Typography variant="h6">Stats:</Typography>
                    <Typography variant="body1">Status: {status}</Typography>
                    <Typography variant="body1">
                      Launch Date: {launch_date.split('-').reverse().join('/')}
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
          )
        )
      ) : (
        console.log(error)
      )}
    </Grid>
  );
};

export default Rovers;
