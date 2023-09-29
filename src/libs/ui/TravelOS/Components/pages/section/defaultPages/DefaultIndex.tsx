import React from 'react';
import MyAccount from './myAccount/MyAccount';
import Faq from './faq/Faq';
import { Box, Grid } from '@mui/material';
import NavBar from '../../navbar/NavBar';
import FilterNavBar from '../home/filterComponent/filterNavBar/FilterNavBar';
import FilterItemOne from '../home/filterComponent/filterItem/filterItemone/FilterItemOne';
import Map from '../home/filterComponent/filterItem/map/Map';
import ModelIndex from './models/ModelIndex';
import DownloadFactSheet from './downloadFactsheet/DowloadFactSheet';
const DefaultIndex = (props: any) => {
  const { meneItme } = props;
  return (
    <Box>
      <Box>
        <NavBar meneItme={meneItme} />
      </Box>
      <Box>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={11}>
            <FilterNavBar />
          </Grid>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box width={'85%'}>
                <FilterItemOne />
              </Box>
            </Grid>
            <Grid item p={3} xs={12} md={6}>
              <Map latitude={40.7128} longitude={-74.006} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <ModelIndex />
      </Box>
      <Box>
        <MyAccount />
      </Box>
      <Box>
        <DownloadFactSheet />
      </Box>
      <Box>
        <Faq />
      </Box>
    </Box>
  );
};

export default DefaultIndex;
