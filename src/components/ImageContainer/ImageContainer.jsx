import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grow } from '@mui/material';

import useStyles from './styles';
import offline from '../../assets/images/offline.jpg';

const ImageContainer = ({ imgSrc, hdImg, imgTitle, title, i }) => {
  const classes = useStyles();

  return (
    <Grow in i={i} timeout={1000}>
      {!imgSrc ? (
        <div>
          <Typography variant="body1" className={classes.title}>
            Camera Offline
          </Typography>
          <img
            className={classes.offlineImage}
            src={offline}
            alt="Camera Offline"
          />
        </div>
      ) : (
        <div>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
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
        </div>
      )}
    </Grow>
  );
};

export default ImageContainer;
