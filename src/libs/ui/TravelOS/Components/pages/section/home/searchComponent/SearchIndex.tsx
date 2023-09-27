import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
// new code
import Destination from './destination/Destination';
import StayDate from './stayDate/StayDate';
import GuestRoom from './guest&Room/GuestRoom';
import './search.css';
import { Link } from 'react-router-dom';

const SearchIndex = (props: any) => {
  const { meneItme } = props;
  return (
    <div>
      <Box paddingX={4}>
        <Grid
          container
          // marginTop={5}
          border={2}
          borderColor={'primary.main'}
          borderRadius={2}
          height={'4.8rem'}
          position={'relative'}
        >
          <Grid position={'relative'} item xs={4}>
            <Destination meneItme={meneItme} />
          </Grid>
          <Grid
            position={'relative'}
            item
            xs={4}
            borderLeft={2}
            borderRight={2}
            borderColor={'primary.main'}
          >
            <StayDate />
          </Grid>
          <Grid position={'relative'} item xs={4}>
            <Grid
              className="guest_roomsBox"
              display={'flex'}
              flexDirection={'row'}
            >
              <GuestRoom />
              <Link to="/dashboard/search" className="navBar_link">
                <Button
                  // fullWidth

                  className="homePage_searchButton"
                  color="primary"
                  variant="contained"
                >
                  {/* {t(`${nvBarHome}`)} */}
                  SEARCH
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SearchIndex;
