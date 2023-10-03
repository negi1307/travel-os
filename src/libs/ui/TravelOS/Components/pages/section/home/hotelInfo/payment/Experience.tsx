import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { Button } from '@mui/material';
import './payment.css';
const Experience: React.FC = () => {
  const data = [
    {
      name: 'AIRPORT TRANSFER',
      imageUrl: 'https://picsum.photos/id/237/200/300',
    },
    {
      name: 'WATERPARK PACKAGE',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      name: 'AWAKEN WELLNESS',
      imageUrl: 'https://picsum.photos/200/300?grayscale',
    },
    {
      name: 'ROMANTIC PACKAGE',
      imageUrl: 'https://picsum.photos/200/300/?blur',
    },
    {
      name: 'MARINE EXPERIENCES',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    },
  ];

  return (
    <>
      <Box padding={4}>
        <Box display={'flex'}>
          <Box>1</Box>
          <Box marginLeft={2}>
            <Typography color={'primary.main'}>Back</Typography>
          </Box>
        </Box>
        <Box my={3}>
          <Typography variant="h5">Add Unique Experiences</Typography>
        </Box>
        <Box>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            {data?.map((item) => {
              return (
                <>
                  <Box>
                    <Grid item xs={2} marginRight={5} marginY={3}>
                      <Box>
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="experience_boxImage"
                        />
                      </Box>
                      <Box mt={2}>
                        <Typography variant="subtitle1">{item.name}</Typography>
                      </Box>
                      <Box mt={4}>
                        <Button
                          variant="outlined"
                          className="experience_BoxButton"
                        >
                          Add
                        </Button>
                      </Box>
                    </Grid>
                  </Box>
                </>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
