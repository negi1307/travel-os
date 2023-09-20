import React from 'react';
import { Box, Grid } from '@mui/material';

import ChooseRoomTable from './chooseRoom/ChooseRoomTable';
import SelectionSummary from './selectionSummary/SelectionSummary';

const HotelInfoIndex: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={10}>
        <ChooseRoomTable />
      </Grid>
      <Grid item xs={12} sm={2}>
        <SelectionSummary />
      </Grid>
    </Grid>
  );
};

export default HotelInfoIndex;
