import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const BirthDaySage = () => {
  return (
    <Box>
      <Grid
        container
        className="choose_birthdaySection"
        sx={{ backgroundColor: '#ffff' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={8}>
          <Box className="child_birthdaybox">
            <Box>
              <Typography className="birthday_sale_hading_font_style">
                Birthday Sale - Advance Purchase Offer - Room Only
              </Typography>
            </Box>
            <Box paddingTop={3} paddingBottom={3} display={'flex'}>
              <Box className="birthday_daily_font_style">1</Box>
              <Box>
                <Typography className="birthday_daily_font_style">
                  Daily access 10 Aqua-venture Waterpark, the worlds largest
                  waterpark
                </Typography>
              </Box>
            </Box>
            <Box paddingBottom={3} display={'flex'}>
              <Box className="birthday_daily_font_style">1</Box>
              <Box>
                <Typography className="birthday_daily_font_style">
                  Enjoy daily access to The Lost Chambers aquarium with over
                  65,000 marine animals
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="birthday_atlantisMoblie">
            <Button className="birthday_atlantis_btn_font_style">
              ATLANTIS.COM Rate:AED 2600 (+18%)
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display={'flex'}
          alignItems={'center'}
          justifyItems={'center'}
          flexDirection={'column'}
        >
          <Box>
            <Typography className="birthday_aed_font_Style">
              AED 2,202
            </Typography>
          </Box>
          <Box paddingTop={2} paddingBottom={3}>
            <Typography className="birthday_exc_font_style">
              exc. taxes & fees
            </Typography>
          </Box>
          <Box>
            <Button className="birthday_select_btn_font_style">
              SELECT THIS RATE
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className="choose_birthdaySection"
        sx={{ backgroundColor: '#ffff' }}
        border={3}
        borderColor={'primary.main'}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={8}>
          <Box className="child_birthdaybox">
            <Box>
              <Typography className="birthday_sale_hading_font_style">
                Birthday Sale - Advance Purchase Offer - Room Only
              </Typography>
            </Box>
            <Box paddingTop={3} paddingBottom={3} display={'flex'}>
              <Box className="birthday_daily_font_style">1</Box>
              <Box>
                <Typography className="birthday_daily_font_style">
                  Daily access 10 Aqua-venture Waterpark, the worlds largest
                  waterpark
                </Typography>
              </Box>
            </Box>
            <Box paddingBottom={3} display={'flex'}>
              <Box className="birthday_daily_font_style">1</Box>
              <Box>
                <Typography className="birthday_daily_font_style">
                  Enjoy daily access to The Lost Chambers aquarium with over
                  65,000 marine animals
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginTop={5} className="birthday_atlantisMoblie2">
            <Button className="birthday_atlantis_btn_font_style">
              ATLANTIS.COM Rate:AED 2600 (+18%)
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display={'flex'}
          alignItems={'center'}
          justifyItems={'center'}
          flexDirection={'column'}
        >
          <Box>
            <Typography className="birthday_aed_font_Style">
              AED 2,202
            </Typography>
          </Box>
          <Box paddingTop={2} paddingBottom={3}>
            <Typography className="birthday_exc_font_style">
              exc. taxes & fees
            </Typography>
          </Box>
          <Box>
            <Button className="birthday_select_btn_font_style">
              SELECT THIS RATE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BirthDaySage;
