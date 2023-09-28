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
import './ChooseRoom.css';

const ChooseRoomTable = (props: any) => {
  const { meneItme } = props;
  const { left_side_arrow, choose_Room_top, hotel } =
    meneItme?.[9]?.chooseRoomImg?.[0];

  return (
    <div>
      <Box
        padding={5}
        sx={{
          // padding: 4,
          // backgroundColor: '#f5f5f5',
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
        >
          <Box display={'flex'} alignItems={'center'}>
            <Box>
              <img
                src={choose_Room_top}
                alt=""
                className="choose_room_img_radius"
              />
            </Box>
            <Box marginLeft={4}>
              <Typography
                // variant="h4"
                // sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 1 }}
                className="atlantis_font_style"
              >
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

        {/* <Box border={1} borderColor={'primary.main'} marginTop={3}>
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box flex={'1.5'} marginLeft={2}>
              <Typography className="choose_accordin_text_font_style">
                Ocean Queen Room
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography className="choose_accordin_text_font_style">
                2 Queen Beds
              </Typography>
            </Box>
            <Box
              display={'flex'}
              flex={1}
              alignItems={'center'}
              justifyContent={'space-evenly'}
            >
              <Box display={'flex'}>
                <img src={choose_user} alt="" />

                <Typography
                  marginLeft={2}
                  className="choose_accordin_text_font_style"
                >
                  {' '}
                  x2
                </Typography>
              </Box>
              <Box>
                <Typography className="choose_accordin_text_font_style">
                  4 Rates
                </Typography>
              </Box>
              <Box>
                <Typography className="choose_accordin_text_font_style">
                  From AED 2,050
                </Typography>
              </Box>
            </Box>

            <Box marginRight={2}>
              <img
                src={choose_down_arrow_img}
                alt=""
                className="choose_accordin_right_side_down_img"
              />
            </Box>
          </Box>
        </Box> */}

        {/* <Box>
          <Accordion
            sx={{
              border: '2px solid #2196F3',
              marginTop: '15px',
              marginBottom: '15px',
              boxShadow: 'none',
              minHeight: 'unset',
              '& .MuiAccordionSummary-root .css-o4b71y-MuiAccordionSummary-content':
                {
                  margin: '0',
                },
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: '12px',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={choose_down_arrow_img}
                  alt=""
                  className="choose_accordin_right_side_down_img"
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box
                display={'flex'}
                width={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box flex={'1.5'}>
                  <Typography className="choose_accordin_text_font_style">
                    Ocean Queen Room
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography className="choose_accordin_text_font_style">
                    2 Queen Beds
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  flex={1}
                  alignItems={'center'}
                  justifyContent={'space-evenly'}
                >
                  <Box display={'flex'}>
                    <img src={choose_user} alt="" />

                    <Typography
                      marginLeft={2}
                      className="choose_accordin_text_font_style"
                    >
                      {' '}
                      x2
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="choose_accordin_text_font_style">
                      4 Rates
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="choose_accordin_text_font_style">
                      From AED 2,050
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Room />
            </AccordionDetails>
          </Accordion>
        </Box> */}
      </Box>
    </div>
  );
};

export default ChooseRoomTable;
