import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import useStyles from './styles';
import { useGetAPODQuery } from '../../services/NASA';
import { LoadingSpinner, FeaturedImage } from '../../components/index';

import connectionIssues from '../../assets/images/connection.png';

const Home = () => {
  let classes = useStyles();

  const { data, isFetching } = useGetAPODQuery({});

  return isFetching ? (
    <div className={classes.homeContainer}>
      <Box className={classes.homeInfoContainer}>
        <Typography color="white" align="center" variant="h2">
          Loading NASA's Image of the day...
        </Typography>
      </Box>
      <LoadingSpinner />
    </div>
  ) : data.url ? (
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
  ) : (
    <div className={classes.homeContainer}>
      <Box className={classes.homeInfoContainer}>
        <Typography color="white" align="center" variant="h4">
          Error connecting to the NASA Api!
        </Typography>
        <img
          src={connectionIssues}
          alt="Connection Issues"
          style={{ maxWidth: '100%', height: '200px' }}
        />
        <Typography
          color="white"
          align="center"
          variant="body1"
          style={{ marginTop: '10px' }}
        >
          Apologies, the NASA Api appears to be having issues. Please try
          refreshing the page or trying again later.
        </Typography>
      </Box>
    </div>
  );
};
export default Home;
