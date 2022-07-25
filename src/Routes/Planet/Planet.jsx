import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Modal } from '@mui/material';

import { LoadingSpinner, ImageContainer } from '../../components/index';
import { useGetNasaImagesQuery } from '../../services/ImagesNasa';
import useStyles from './styles';

const Planet = () => {
  const { planet } = useParams();
  const classes = useStyles();

  const { data, isFetching, error } = useGetNasaImagesQuery(
    'planet ' + planet + ' images'
  );
  console.log(data);
  return (
    <main>
      <Box>
        <Typography variant="h1" align="center" sx={{ color: 'white' }}>
          {planet.toUpperCase()}
        </Typography>
      </Box>
      <Grid container>
        {data?.collection?.items.map(({ data, links, href }) =>
          data[0]?.media_type === 'image' ? (
            <Grid item key={data[0]?.nasa_id} md={4}>
              <ImageContainer
                imgSrc={`https://images-assets.nasa.gov/image/${data[0]?.nasa_id}/${data[0]?.nasa_id}~thumb.jpg`}
                hdImg={`https://images-assets.nasa.gov/image/${data[0]?.nasa_id}/${data[0]?.nasa_id}~orig.jpg`}
                title={data[0]?.title}
              />
            </Grid>
          ) : null
        )}
      </Grid>
    </main>
  );
};

export default Planet;
