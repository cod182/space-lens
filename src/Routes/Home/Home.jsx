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
        imgSrc={data.thumbnail_url ? data?.thumbnail_url : data?.url}
        imgDate={data?.date?.split('-').reverse().join('/')}
        imgTitle={data?.title}
        hdImg={data.thumbnail_url ? data?.url : data?.hdurl}
      />
      <Box className={classes.homeInfoContainer}>
        <Typography variant="body1">{data?.explanation}</Typography>
      </Box>
    </div>
  );
};

export default Home;
