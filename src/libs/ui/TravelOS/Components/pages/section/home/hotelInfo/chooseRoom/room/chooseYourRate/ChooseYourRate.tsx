import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import './ChooseRoom.css';
const ChooseYourRate = (props: any) => {
  const { meneItme } = props;
  const { choose_Room_section } = meneItme?.[9]?.chooseRoomImg?.[0];
  return (
    // <div>
    <Grid container className="choose_roomCardSection" position={'relative'}>
      <Grid className="choose_roomCard1 width_Height" item xs={12}>
        <img className="width_Height" src={choose_Room_section} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        className="choose_roomCard2"
        display={'flex'}
        alignItems={'end'}
        justifyContent={'center'}
        position={'absolute'}
        top={0}
        left={0}
        bottom={0}
        right={0}
        paddingBottom={4}
      >
        <Box>
          <Typography className="choose_rate_text_style">
            Choose your rate for{' '}
          </Typography>
          <Typography className="choose_rate_text_style">
            Ocean Queen Room
          </Typography>
        </Box>
      </Grid>
    </Grid>
    // </div>
  );
};

export default ChooseYourRate;
