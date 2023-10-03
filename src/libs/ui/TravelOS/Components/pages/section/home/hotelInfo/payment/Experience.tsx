import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { Button } from '@mui/material';
import './payment.css';
interface propsDataType {
  meneItme: any;
}

const Experience = (props: propsDataType) => {
  const { meneItme } = props;
  const { addUnique1, addUnique2, addUnique3, addUnique4, addUnique5 } =
    meneItme?.[11]?.addUniqueImg?.[0];
  console.log(addUnique1, 'unnnn');
  const data = [
    {
      name: 'AIRPORT TRANSFER',
      imageUrl: addUnique1,
    },
    {
      name: 'WATERPARK PACKAGE',
      imageUrl: addUnique2,
    },
    {
      name: 'AWAKEN WELLNESS',
      imageUrl: addUnique3,
    },
    {
      name: 'ROMANTIC PACKAGE',
      imageUrl: addUnique4,
    },
    {
      name: 'MARINE EXPERIENCES',
      imageUrl: addUnique5,
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
          <Typography className="experience_hadingMainFontStyle">
            Add Unique Experiences
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data?.map((item) => {
              return (
                <>
                  <Grid item xs={2} className="experience_grindPrnt">
                    <Box>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="experience_boxImage"
                      />
                    </Box>
                    <Box mt={2}>
                      <Typography className="guest_titleFontStyle">
                        {item.name}
                      </Typography>
                    </Box>
                    <Box mt={4}>
                      <Button
                        variant="outlined"
                        className="experience_addButton_fontStyle"
                      >
                        Add
                      </Button>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={6}>
                    hii
                  </Grid> */}

                  {/* <Box>
                    <Grid item xs={3}>
                      <Box>
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="experience_boxImage"
                        />
                      </Box>
                      <Box mt={2}>
                        <Typography>{item.name}</Typography>
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
                  </Box> */}
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
