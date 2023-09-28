import React from 'react';
import { Box, IconButton,  Typography } from '@mui/material';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
const FilterNavBar: React.FC = () => {

  return (
    <>
      <Box p={3} display="flex" alignItems="center" height={60} width="100%">
        <Box
          alignItems={'center'}
          display={'flex'}
          justifyContent={'start'}
          width={'30%'}
        >
          <IconButton>
            <ArrowCircleLeftOutlinedIcon/> 
           <strong> Back</strong>
          </IconButton>
          
        </Box>
        <Box
          width="70%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography sx={{fontSize:'12px'}} color="primary">
            View As
          </Typography>
          <LocationOnIcon color="primary" />
          <AppsRoundedIcon
            sx={{
              color: 'primary',
              marginLeft: '20px',
              borderLeft: '1px solid ',
              paddingLeft: '5px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default FilterNavBar;
