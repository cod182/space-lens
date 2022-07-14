import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Modal } from '@mui/material';

import useStyles from './styles';

import offline from '../../assets/images/offline.jpg';

const ImageContainer = ({ key, imgSrc, hdImg, imgTitle }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };
  const handleOpen = (thisImg, thisTitle) => () => {
    setOpen({ thisImg, thisTitle });
  };
  return (
    <>
      {!imgSrc ? (
        <img className={classes.image} src={offline} alt="Camera Offline" />
      ) : (
        <img
          className={classes.image}
          src={imgSrc}
          alt={imgTitle}
          onClick={handleOpen(hdImg, imgTitle)}
        />
      )}

      <Modal
        open={!!open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            p: 4,
          }}
          className={classes.model}
        >
          <Typography id="image-modal-title" variant="h6" component="h2">
            {open?.thisTitle}
          </Typography>
          <Box>
            <a target="_blank" href={open?.thisImg}>
              <img
                className={classes.modelImage}
                src={open?.thisImg}
                alt={open?.thisTitle}
              />
            </a>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ImageContainer;
