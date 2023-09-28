import { Box, Typography } from '@mui/material';
import React from 'react';
import './activitySummary.css';
const ActivitySummaryleft = () => {
  return (
    <Box className="custom_padding">
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <Typography className="activity_hding_font_style ">
            Activity Summary
          </Typography>
          <Typography className="activity_quotation_font_style">
            Quotation Created : 0
          </Typography>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        marginTop={3}
        marginBottom={3}
      >
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box>
            <Typography className="activity_typo_font_style">Open</Typography>
          </Box>
          <Box className="activity_box_color activity_bgColor1">0</Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box>
            <Typography className="activity_typo_font_style">
              Cancelled
            </Typography>
          </Box>
          <Box className="activity_box_color activity_bgColor2">15</Box>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'space-around'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box>
            <Typography className="activity_typo_font_style ">
              Booked
            </Typography>
          </Box>
          <Box className="activity_box_color activity_bgColor3 ">84</Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box>
            <Typography className="activity_typo_font_style">
              Booking on Hold
            </Typography>
          </Box>
          <Box
            className="activity_box_color activity_bgColor4"
            textAlign={'center'}
          >
            0
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivitySummaryleft;
