import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './TableCard.css';

const TableCard = (props: any) => {
  const { meneItme } = props;
  const {
    table_card1,
    table_card2_right_side_dwnl,
    table_card3_right_side_cros,
  } = meneItme[10]?.dashboardSearhImg?.[0];

  const dummyData = [
    { item: 'Ocean Queen Room x 1', items: 'Room Type' },
    { item: '2 Nights', items: 'Stay' },
    { item: '2 Adults 0 Child', items: 'Guest Count' },
    { item: 'ATL20230920873', items: 'Booking Number' },
    { item: 'Confirmed', items: 'Status' },
    { item: 'AED 2,999', items: 'Total Cost' },
  ];

  return (
    <Box border={1}>
      <Grid container spacing={2} className="tableCard_main_hight_wigth">
        <Grid item xs={9}>
          <Grid item container xs={12}>
            <Grid xs={1}>
              <img src={table_card1} alt="" />
            </Grid>
            <Grid xs={3} marginLeft={3} marginY={2}>
              <Box>
                <Typography className="tableCard_atlantis_font_style">
                  ATLANTIS, The Palm
                </Typography>
              </Box>
              <Box>
                <Typography className="tableCard_hotel_font_style">
                  Hotel Name
                </Typography>
              </Box>
            </Grid>
            <Grid xs={3} marginY={2}>
              <Box>
                <Typography className="tableCard_atlantis_font_style">
                  20th sep 2023-22nd Sep 2023
                </Typography>
              </Box>
              <Box>
                <Typography className="tableCard_hotel_font_style">
                  Stay Dates
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={12} container marginTop={3}>
            {dummyData?.map((data) => {
              return (
                <>
                  <Grid xs={2}>
                    <Box>
                      <Typography className="tabelCard_ocean_font_style">
                        {data.item}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="tableCard_roomType_font_Style">
                        {data.items}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          display={'flex'}
          justifyContent={'end'}
          alignItems={'center'}
        >
          <Box>
            <Box display={'flex'} justifyContent={'center'}>
              <img
                src={table_card2_right_side_dwnl}
                alt=""
                className="tableCard_right_img"
              />
            </Box>
            <Box>
              <Typography className="tableCard_right_text_font_style">
                Download
              </Typography>
            </Box>
          </Box>
          <Box marginX={3}>
            <Box display={'flex'} justifyContent={'center'}>
              <img
                src={table_card3_right_side_cros}
                alt=""
                className="tableCard_right_img"
              />
            </Box>
            <Box>
              <Typography className="tableCard_right_text_font_style">
                Cancel Booking
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableCard;
