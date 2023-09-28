import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Paper,
  Grid,
  Slider,
} from '@mui/material';

const FilterItemOne = () => {
  const [priceRange, setPriceRange] = useState([200, 3200]);
  const [value, setValue] = useState(2);

  const handlePriceRangeChange = (event: any, newValue: any) => {
    setPriceRange(newValue);
  };

  return (
    <Box p={2}>
      <Box display={'flex'} alignItems={'center'} >
        <Typography p={3} px={3} sx={{fontSize:'11px'}} color="primary">
          Price Range:
        </Typography>
        <Box display={'flex'} alignItems={'center'} width={'50%'}>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            // valueLabelDisplay="on"
            max={3146}
            min={250}
            color="primary"
          />
        </Box>
      </Box>
      <Card sx={{ borderRadius: '19px', border: '2px solid #0057B7',maxWidth:'589px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              sx={{
                width: '100%',
                borderRadius: '16px 0 0 16px',
                height: '100%',
                objectFit: 'fill',
              }}
              image="https://images.pexels.com/photos/13610654/pexels-photo-13610654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image Alt Text"
            />
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs={12} sm={6}>
              <CardContent
                className='card-content-paragraph'
              >
                <Typography
                  mt={2}
                  variant='subtitle2'
                  // component="div"
                  gutterBottom
                  color="primary"
                >
                  ATLANTIS, THE PALM
                </Typography>
                <Box sx={{ mt: 0, lineHeight: 0.66, }}>
                  <Typography
                    color="text.secondary"
                    variant='caption' >
                    A daring destination resort
                    where you’ll be left with a
                    feeling of wonderment.                  </Typography>
                </Box>
                <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={0}
                sx={{ display: 'flex', flexDirection: 'column', p: 2 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Daily Rates From
                </Typography>
                <Typography variant="h5" color="primary">
                  <b>AED 2,125</b>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  exc taxes and fees
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 1, width: '113px', height: '30px', fontSize: '11px' }}>
                  View Rooms
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default FilterItemOne;