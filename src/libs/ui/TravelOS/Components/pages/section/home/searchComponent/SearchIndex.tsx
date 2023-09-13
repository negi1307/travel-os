import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
// new code
import Destination from './destination/Destination';
import StayDate from './stayDate/StayDate';
import GuestRoom from './guest&Room/GuestRoom';

const SearchIndex = () => {
  return (
    <div>
      <Box paddingX={4} marginTop={5}>
        <Grid container marginTop={5}>
          <Grid item xs={4}>
            <Destination />
          </Grid>
          <Grid item xs={4}>
            <StayDate />
          </Grid>
          <Grid item xs={4}>
            <GuestRoom />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SearchIndex;
