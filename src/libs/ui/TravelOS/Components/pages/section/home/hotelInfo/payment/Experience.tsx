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
          <Grid container>
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
    // <div style={{ padding: '20px 40px' }}>
    //   <div
    //     style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
    //   >
    //     <Button onClick={handleBackButtonClick}>
    //       <ArrowCircleLeftOutlinedIcon /> &nbsp;{' '}
    //       <strong style={{ color: '#007FFF' }}>Back</strong>
    //     </Button>
    //   </div>

    //   <h2>Add Unique Experiences</h2>

    //   <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
    //     {data.map((item, index) => (
    //       <div key={index} >
    //         <img
    //           src={item.imageUrl}
    //           alt={item.name}
    //           style={{
    //             width: '350px',
    //             height: '230px',
    //             border: '2px solid lightblue',
    //           }}
    //         />
    //         <CardContent>
    //           <div>
    //             <span>{item.name}</span>
    //           </div>

    //           <Button variant="contained">Add</Button>
    //         </CardContent>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Experience;
