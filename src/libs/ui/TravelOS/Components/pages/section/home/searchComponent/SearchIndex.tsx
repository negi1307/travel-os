import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
// new code
import Destination from './destination/Destination';
import StayDate from './stayDate/StayDate';
import GuestRoom from './guest&Room/GuestRoom';
import { Link } from 'react-router-dom';

const SearchIndex = (props: any) => {
  const { meneItme } = props;
  const [selectClose, setSelectClose] = useState('');
  const mainConnentFill = (type: string) => {
    setSelectClose(type);
  };
  const mainConnentEmpty = () => {
    setSelectClose('');
  };
  return (
    <div>
      <Box paddingX={4}>
        <Grid
          container
          // marginTop={5}
          // border={2}
          borderColor={'primary.main'}
          borderRadius={2}
          height={'4.8rem'}
          position={'relative'}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="search_box_main_border"
        >
          <Grid position={'relative'} item xs={4}>
            <Destination
              meneItme={meneItme}
              selectClose={selectClose}
              mainConnentEmpty={mainConnentEmpty}
              mainConnentFill={mainConnentFill}
            />
          </Grid>
          <Grid
            position={'relative'}
            item
            xs={4}
            borderColor={'primary.main'}
            className="search_box_border"
          >
            <StayDate
              selectClose={selectClose}
              mainConnentFill={mainConnentFill}
              mainConnentEmpty={mainConnentEmpty}
            />
          </Grid>
          <Grid position={'relative'} item xs={4}>
            <Grid
              className="guest_roomsBox search_box_border"
              display={'flex'}
              flexDirection={'row'}
            >
              <GuestRoom
                selectClose={selectClose}
                mainConnentFill={mainConnentFill}
                mainConnentEmpty={mainConnentEmpty}
              />
              <Link to="/dashboard/search" className="navBar_link_btn">
                <Button
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
        <Box className="displayNone1">
          <Link to="/dashboard/search" className="navBar_link_btn">
            <Button
              className="search_button"
              fullWidth
              color="primary"
              variant="contained"
            >
              {/* {t(`${nvBarHome}`)} */}
              SEARCH
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default SearchIndex;
