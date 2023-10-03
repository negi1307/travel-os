import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const OceanQueenRoom = (props: any) => {
  const { meneItme } = props;
  const { choose_Room_section } = meneItme?.[9]?.chooseRoomImg?.[0];
  return (
    <Grid
      container
      spacing={2}
      className="choose_roomCardParent"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid
        item
        xs={3}
        padding={0}
        className="choose_roomCardbox1 custom_heigth"
      >
        <img className="custom_heigth" src={choose_Room_section} alt="" />
      </Grid>
      <Grid item xs={4} className="choose_roomCardbox2 custom_heigth">
        <Box className="child_box">
          <Box>
            <Typography className="ocean_heading_font_style">
              Ocean Queen Room
            </Typography>
          </Box>
          <Box marginTop={'auto'}>
            <Typography className="ocean_text_font_style">
              With contemporary designs celebrating the majesty of the sea, the
              spacious and sleek Ocean Room offers incredible views of the
              Arabian Sea.
            </Typography>
          </Box>
          <Box marginTop={'auto'}>
            <Button variant="outlined" className="ocean_btn_font_style">
              VIEW MORE INFO
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        padding={0}
        className="ocean_start_fom_flex choose_roomCardbox3 custom_heigth"
      >
        <Box className="child_box" textAlign={'center'}>
          <Typography className="ocean_starting_font_style">
            STARTING FROM
          </Typography>{' '}
          <Typography className="ocen_aed_font_style" marginY={1}>
            AED 2,050
          </Typography>
          <Typography className="ocen_exc_font_style">
            exc. taxes & fees
          </Typography>
          <Box>
            <Button className="ocen_unit_btn_font_style">
              10 + UNITS AVAILBLE
            </Button>
          </Box>
        </Box>
        {/* <Box textAlign={'center'}>
          <Box>
            <Typography className="ocean_starting_font_style">
              STARTING FROM
            </Typography>
          </Box>
          <Box>
            <Typography className="ocen_aed_font_style">AED 2,050</Typography>
          </Box>
          <Box>
            <Typography className="ocen_exc_font_style">
              exc. taxes & fees
            </Typography>
          </Box>
          <Box>
            <Button className="ocen_unit_btn_font_style">
              10 + UNITS AVAILBLE
            </Button>
          </Box>
        </Box> */}
      </Grid>
    </Grid>
    // <Box display={'flex'} justifyContent={'space-between'}>
    //   <Box>
    //     <img src={choose_Room_section} alt="" />
    //   </Box>
    //   <Box>
    //     <Typography>Ocean Queen Room</Typography>
    //     <Typography>
    //       With contemporary designs celebrating the majesty of the sea, the
    //       spacious and sleek Ocean Room offers incredible views of the Arabian
    //       Sea.
    //     </Typography>
    //     <Button variant="outlined">VIEW MORE INFO</Button>
    //   </Box>

    //   <Box>
    //     <Typography>STARTING FROM</Typography>
    //     <Typography>AED 2,050</Typography>
    //     <Typography>exc. taxes & fees</Typography>
    //   </Box>
    // </Box>
  );
};

export default OceanQueenRoom;
