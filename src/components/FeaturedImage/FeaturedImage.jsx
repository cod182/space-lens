import React from 'react';
import { Typography, Box } from '@mui/material';

import useStyles from './styles';

const FeaturedImage = ({ hdImg, imgSrc, imgTitle, imgDate }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box sx={{ position: 'relative' }}>
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
        <Box className={classes.titleContainer}>
          <Typography sx={{ fontSize: 'x-large', fontWeight: 'bold' }}>
            {imgTitle.toUpperCase()}
          </Typography>
          <Typography>{imgDate}</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FeaturedImage;
