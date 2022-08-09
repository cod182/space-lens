import React from 'react';
import useStyles from './styles';
import { Box, Typography, Link } from '@mui/material';

const Attribution = () => {
  let classes = useStyles();

  return (
    <Box className={classes.outerContainer}>
      <Typography variant="h1">Attribution</Typography>

      <Box className={classes.innerContainer}>
        <Typography variant="body1">
          All images are provided by NASA form the Public domain.
        </Typography>
        <Typography variant="body1">Apis used are provided by NASA.</Typography>

        <Typography variant="body1">
          Featured image and rover images are provided by api.nasa.gov
        </Typography>
        <Typography variant="body1">
          Planet images are provided by images-api.nasa.gov
        </Typography>
        <Typography variant="body1">
          Planet icons are provided by{' '}
          <Link to="https://www.deviantart.com/citizenjustin">
            CitizenJustin
          </Link>{' '}
          via{' '}
          <Link to="https://www.deviantart.com/citizenjustin/art/Planetary-Icons-for-Windows-105450592">
            deviantart
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Attribution;
