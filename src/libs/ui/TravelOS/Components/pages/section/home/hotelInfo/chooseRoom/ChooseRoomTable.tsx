import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Grid,
  Divider,
  Switch,
  Box,
  Avatar,
} from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
// import RoomPage from './RoomsPage';
import Room from './room/Room';

const ChooseRoomTable = (props: any) => {
  const { meneItme } = props;
  const { left_side_arrow, choose_Room_top, hotel } =
    meneItme?.[9]?.chooseRoomImg?.[0];

  return (
    <div>
      <Box
        padding={5}
        className="chooseRoom_mobileMainParent"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Box>
          <IconButton sx={{ color: '#2196F3' }}>
            {/* <ArrowCircleLeftOutlinedIcon /> */}
            <img src={left_side_arrow} alt="" />
            <Typography className="back_btn_top" marginLeft={2}>
              Back
            </Typography>
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          className="chooseRoom_mobileParent"
        >
          <Box
            display={'flex'}
            className="chooseRoom_mobileChild1"
            alignItems={'center'}
          >
            <Box className="chooseRoom_imageBox">
              <img
                src={choose_Room_top}
                alt=""
                className="choose_room_img_radius"
              />
            </Box>
            <Box marginLeft={4} className="chooseRoom_headingBox">
              <Typography className="atlantis_font_style">
                ATLANTIS THE PALM
              </Typography>

              <Typography
                marginTop={2}
                paddingTop={2}
                className="choose_dubai_font_style"
              >
                {' '}
                Dubai
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Box>
              <img src={hotel} alt="" />
            </Box>
            <Box marginLeft={1}>
              <a href="" className="choose_right_hotel_font_style">
                Hotel Info
              </a>
            </Box>
          </Box>
        </Box>

        <Box borderBottom={1} marginY={3} borderColor={'primary.main'}>
          <Typography className="choose_roomRate_ront_style">
            Room / Rates
          </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
          <Box>
            <Typography className="choose_roomType_font_style">
              12 room types | 30 room rates
            </Typography>
          </Box>
          <Box>
            <Typography className="choose_roomType_font_style">
              GROUPED BY: ROOM TYPES
            </Typography>
          </Box>
        </Box>

        <Box marginTop={4}>
          <Typography className="choose_room_hding_style">
            Choose Room
          </Typography>
        </Box>
        <Box>
          <Room meneItme={meneItme} />
          <Room meneItme={meneItme} />
          <Room meneItme={meneItme} />
        </Box>
      </Box>
    </div>
  );
};

export default ChooseRoomTable;
