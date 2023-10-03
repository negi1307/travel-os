import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import OceanQueenRooms from './oceanQueenRoom/OceanQueenRoom';
import ChooseYourRate from './chooseYourRate/ChooseYourRate';
import BirthDaySage from './birthdaySale/BirthDaySage';

const Room = (props: any) => {
  const { meneItme } = props;
  const { choose_user, choose_down_arrow_img } =
    meneItme?.[9]?.chooseRoomImg?.[0];
  const [show, setShow] = useState(false);

  return (
    <div>
      <Box>
        <Box
          border={1}
          borderColor={'primary.main'}
          marginTop={3}
          onClick={() => {
            setShow(!show);
          }}
        >
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
        </Box>
        {show ? (
          <>
            <Box className="choose_roomParent">
              {/* <Box sx={{ backgroundColor: '#ffff' }}>
                <OceanQueenRooms meneItme={meneItme} />
              </Box> */}
              <Box paddingX={3}>
                <ChooseYourRate meneItme={meneItme} />
              </Box>
              <Box>
                <BirthDaySage />
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};

export default Room;
