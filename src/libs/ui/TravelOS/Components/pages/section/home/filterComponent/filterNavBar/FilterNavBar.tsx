import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FilterNavBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState([200, 3200]);

  const handlePriceRangeChange = (event: any, newValue: any) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <Box p={3} display="flex" alignItems="center" height={60} width="100%">
        <Box
          alignItems={'center'}
          display={'flex'}
          justifyContent={'start'}
          width={'30%'}
        >
          <Typography p={2} variant="h5" color="primary">
            Price Range:
          </Typography>
          <Box display={'flex'} alignItems={'center'} width={'50%'}>
            <Slider
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="on"
              max={3146}
              min={250}
              color="primary"
            />
          </Box>
        </Box>
        <Box
          width="70%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography variant="h5" color="primary">
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
