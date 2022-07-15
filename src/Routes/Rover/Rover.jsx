import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import useStyles from './styles';

import { LoadingSpinner, ImageContainer } from '../../components/index';
import { useGetImagesQuery } from '../../services/NASA';

const Rover = () => {
  const { rover } = useParams();
  const [sol, setSol] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    if (rover === 'curiosity') {
      setSol(1000);
    }
  }, [rover]);

  const { data: fhaz, isFetching: fhazFetching } = useGetImagesQuery({
    rover,
    sol,
    camera: 'fhaz',
  });

  const { data: rhaz, isFetching: rhazFetching } = useGetImagesQuery({
    rover,
    sol,
    camera: 'rhaz',
  });

  console.log('Rover Name', rover);
  console.log('Front Camera', fhaz);
  console.log('Rear Camera', rhaz);

  return (
    // <div>

    //   {rhazFetching ? (
    //     <LoadingSpinner />
    //   ) : (
    //     <Box>
    //       {rhaz?.photos
    //         .slice(0, 1)
    //         .map(({ camera, earth_date, id, img_src, rover, sol }) => (
    //           <div key={id}>
    //             <ImageContainer imgSrc={img_src} imgTitle={camera?.full_name} />
    //           </div>
    //         ))}
    //     </Box>
    //   )}
    // </div>

    <Box className={classes.container}>
      <Box className={classes.imageContainerTop}>
        {fhazFetching ? (
          <LoadingSpinner />
        ) : (
          <Box>
            {fhaz?.photos
              .slice(0, 1)
              .map(({ camera, earth_date, id, img_src, rover, sol }) => (
                <div key={id}>
                  <ImageContainer
                    imgSrc={img_src}
                    imgTitle={camera?.full_name}
                    title={camera?.full_name}
                  />
                </div>
              ))}
          </Box>
        )}
      </Box>

      <Box className={classes.imageContainerX}>
        <Box className={classes.imageContainerTop}>
          <ImageContainer />
        </Box>

        <Box className={classes.imageContainerTop}>
          <ImageContainer />
        </Box>
      </Box>
      <Box className={classes.imageContainerTop}>
        {rhazFetching ? (
          <LoadingSpinner />
        ) : (
          <Box>
            {rhaz?.photos
              .slice(0, 1)
              .map(({ camera, earth_date, id, img_src, rover, sol }) => (
                <div key={id}>
                  <ImageContainer
                    imgSrc={img_src}
                    imgTitle={camera?.full_name}
                    title={camera?.full_name}
                  />
                </div>
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Rover;
