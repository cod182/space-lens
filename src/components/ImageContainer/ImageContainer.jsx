import React from 'react';
import { Typography, Grow, Box } from '@mui/material';

import useStyles from './styles';
import offline from '../../assets/images/offline.jpg';

const ImageContainer = ({ imgSrc, hdImg, imgTitle, title, i }) => {
  const classes = useStyles();

  return (
    <Grow in i={i} timeout={1000} sx={{ overflow: 'hidden' }}>
      {!imgSrc ? (
        <Box className={classes.imageContainer}>
          <Typography variant="body1" className={classes.title}>
            Offline
          </Typography>
          <img className={classes.offlineImage} src={offline} alt="Offline" />
        </Box>
      ) : (
        <Box>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
          <Box className={classes.imageContainer}>
            <a
              href={hdImg ? hdImg : imgSrc}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={`${classes.image} ${
                  imgSrc ? classes.cursorPointer : ''
                }`}
                src={imgSrc}
                alt={imgTitle}
              />
            </a>
          </Box>
        </Box>
      )}
    </Grow>
  );
};

export default ImageContainer;
