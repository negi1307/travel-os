import { Box, Grid } from '@mui/material';
import React from 'react';
import DashboarSearchRight from './dashboarSearchBox/DashboarSearchRight';
import ActivitySummaryleft from './activitySummaryBox/ActivitySummaryleft';
// import DashboarMainSection from './dashboarMainSection/DashboarMainSection';
import DashboarTable from './dashboarMainSection/dashboarTable/DashboarTable';
import '../dashboarSection/dashboarSearchBox/DashboarSearch.css';
const IndexDashboardSeaction = (props: any) => {
  const { meneItme } = props;
  return (
    <Box height={'100vh'} padding={5}>
      <Box border={1}>
        <Box>
          <Grid container className="dashboard_bothParent">
            <Grid item xs={8} className="dashboard_searchRight">
              <Grid xs={12} border={1} className="dashboard_searchBox heigth">
                <DashboarSearchRight />
              </Grid>
            </Grid>
            <Grid item xs={4} border={1} className="dashboard_searchLeft">
              <ActivitySummaryleft />
            </Grid>
          </Grid>
        </Box>
        <Box className="table_parentBox">
          <DashboarTable meneItme={meneItme} />
        </Box>
      </Box>
    </Box>
  );
};

export default IndexDashboardSeaction;
