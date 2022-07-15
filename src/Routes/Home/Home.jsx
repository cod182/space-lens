import React from 'react';
import { Typography, Box } from '@mui/material';

import useStyles from './styles';
import { useGetAPODQuery, useGetImagesQuery } from '../../services/NASA';
import { LoadingSpinner, ImageContainer } from '../../components/index';

const Home = () => {
  let classes = useStyles();

  const { data, error, isFetching } = useGetAPODQuery({});

  if (isFetching) {
    return (
      <div className={classes.homeContainer}>
        <Typography align="center" variant="h2">
          NASA's Image of the day!
        </Typography>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={classes.homeContainer}>
      <Typography align="center" variant="h2">
        NASA's Image of the day!
      </Typography>
      <div className={classes.homeImageContainer}>
        <ImageContainer
          imgSrc={data?.url}
          imgTitle={data?.title}
          hdImg={data?.hdurl}
        />
      </div>
      <Box className={classes.homeImageInfoContainer}>
        <Typography variant="h5">{data?.title}</Typography>
        <Typography variant="body3">
          {data?.date?.split('-').reverse().join('/')}
        </Typography>
        <Typography variant="body2">{data?.explanation}</Typography>
      </Box>
    </div>
  );
};

export default Home;
