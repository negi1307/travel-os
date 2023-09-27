import React from 'react';
import { Box, Grid } from '@mui/material';

import ChooseRoomTable from './chooseRoom/ChooseRoomTable';
import SelectionSummary from './selectionSummary/SelectionSummary';

import Experience from './payment/Experience';
import GuestDetail from './payment/GuestDetail';
import PaymentInformation from './payment/PaymentInformation';
const HotelInfoIndex: React.FC = (props: any) => {
  const { meneItme } = props;

  return (
    <Grid container spacing={2} height={'100vh'}>
      <Grid item xs={12} sm={10} sx={{ backgroundColor: '#ecf7fa' }}>
        <ChooseRoomTable meneItme={meneItme} />
        <Experience />
        <GuestDetail />
        <PaymentInformation />
      </Grid>
      <Grid item xs={12} sm={2} sx={{ backgroundColor: '#f9fdfe' }}>
        <SelectionSummary />
      </Grid>
    </Grid>
  );
};

export default HotelInfoIndex;
