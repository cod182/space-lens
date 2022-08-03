import React from 'react';
import { Typography, Box } from '@mui/material';

import useStyles from './styles';
import { useGetAPODQuery, useGetImagesQuery } from '../../services/NASA';
import { LoadingSpinner, FeaturedImage } from '../../components/index';

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
      <FeaturedImage
        imgSrc={data?.url}
        imgDate={data?.date?.split('-').reverse().join('/')}
        imgTitle={data?.title}
        hdImg={data?.hdurl}
      />
      <Box className={classes.homeInfoContainer}>
        <Typography variant="body2">{data?.explanation}</Typography>
      </Box>
    </div>
  );
};

export default Home;
