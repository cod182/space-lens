import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';

import {
  LoadingSpinner,
  ImageContainer,
  Pagination,
} from '../../components/index';
import { useGetNasaImagesQuery } from '../../services/ImagesNasa';
import useStyles from './styles';

const Planet = () => {
  const [page, setPage] = useState(1);
  const { planet } = useParams();
  const classes = useStyles();
  let query = 'planet ' + planet + ' images';
  const { data, isFetching, error } = useGetNasaImagesQuery({ query, page });
  const totalPages = Math.floor(data?.collection?.metadata?.total_hits / 100);
  console.log(totalPages);

  return (
    <main>
      <Box>
        <Typography variant="h1" align="center" sx={{ color: 'white' }}>
          {planet.toUpperCase()}
        </Typography>
      </Box>
      <Grid container sx={{ marginTop: '10px' }}>
        {data?.collection?.items.map(({ data, links, href }) => (
          <Grid item key={data[0]?.nasa_id} md={3}>
            <ImageContainer
              imgSrc={`https://images-assets.nasa.gov/image/${data[0]?.nasa_id}/${data[0]?.nasa_id}~thumb.jpg`}
              hdImg={`https://images-assets.nasa.gov/image/${data[0]?.nasa_id}/${data[0]?.nasa_id}~orig.jpg`}
              title={data[0]?.title}
            />
          </Grid>
        ))}
      </Grid>
      <Box>
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </Box>
    </main>
  );
};

export default Planet;
