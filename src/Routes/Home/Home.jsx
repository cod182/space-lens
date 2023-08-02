import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import useStyles from './styles';
import { useGetAPODQuery } from '../../services/NASA';
import { LoadingSpinner, FeaturedImage } from '../../components/index';

import connectionIssues from '../../assets/images/connection.png';

const Home = () => {
  let classes = useStyles();

  const { data, isFetching } = useGetAPODQuery({});

  const [dataFetching, setDataFetching] = useState(true);
  const [signalLoss, setSignalLoss] = useState(false);

  useEffect(() => {
    const setSignalLost = () => {
      setDataFetching(false);
      setSignalLoss(true);
    };
    setTimeout(() => {
      setSignalLost();
    }, 10000);
  }, []);

  if (dataFetching) {
    return (
      <div className={classes.homeContainer}>
        <Typography align="center" variant="h2">
          NASA's Image of the day!
        </Typography>
        <LoadingSpinner />
      </div>
    );
  }

  return signalLoss ? (
    <div className={classes.homeContainer}>
      <Box className={classes.homeInfoContainer}>
        <Typography variant="h3">Error: Signal Lost!</Typography>
        <img
          src={connectionIssues}
          alt="Connection Issues"
          style={{ maxWidth: '100%', height: '200px' }}
        />
        <Typography variant="body2">
          Apologies, the NASA Api is experiencing connectivity issues.
        </Typography>
      </Box>
    </div>
  ) : (
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
