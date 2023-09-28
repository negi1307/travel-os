import React from 'react';
import FilterNavBar from './filterNavBar/FilterNavBar';
import FilterItemOne from './filterItem/filterItemone/FilterItemOne';
// import FilterItemTwo from './filterItem/map/FilterItemTwo';
import Map from './filterItem/map/Map';
import { Box, Grid, Card } from '@mui/material';
import NavBar from '../../../navbar/NavBar';
// import HomeIndex from '../HomeIndex';
import SearchIndex from '../searchComponent/SearchIndex';
import HotelInfoIndex from '../hotelInfo/HotelInfoIndex';

import IndexDashboardSeaction from '../../dashboard/dashboarSection/IndexDashboardSection';


import DefaultIndex from '../../defaultPages/DefaultIndex';
const FilterIndex: React.FC = (props: any) => {
  const { meneItme } = props;
  return (
    <>
      <Box sx={{backgroundColor:'#EDF7F9'}}>
        <Box>
          <NavBar meneItme={meneItme} />
        </Box>
        <Box>
          <SearchIndex meneItme={meneItme} />
        </Box>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} md={11}>
            <FilterNavBar />
          </Grid>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box width={'85%'}>
                <FilterItemOne />
                {/* <Card1/> */}
              </Box>
            </Grid>
            <Grid item p={3} xs={12} md={6}>
              <Map latitude={40.7128} longitude={-74.006} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <HotelInfoIndex meneItme={meneItme} />
      </Box>
      
      {/* <Box>
        <IndexDashboardSeaction meneItme={meneItme} />
      </Box> */}
      <Box>
        <DefaultIndex/>
      </Box>
    </>
  );
};

export default FilterIndex;
