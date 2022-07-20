import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Modal } from '@mui/material';

import useStyles from './styles';
import offline from '../../assets/images/offline.jpg';

const ImageContainer = ({ imgSrc, hdImg, imgTitle, title }) => {
  const classes = useStyles();

  return (
    <>
      {!imgSrc ? (
        <>
          <Typography variant="body1" className={classes.title}>
            Camera Offline
          </Typography>
          <img
            className={classes.offlineImage}
            src={offline}
            alt="Camera Offline"
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default ImageContainer;
