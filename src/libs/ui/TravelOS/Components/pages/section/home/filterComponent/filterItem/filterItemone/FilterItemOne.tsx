import React from 'react';
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
} from '@mui/material';

const FilterItemOne = () => {
  return (
    <Box p={2}>
      <Card sx={{ borderRadius: '25px', border: '4px solid black' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              sx={{
                width: '100%',
                borderRadius: '16px 0 0 16px',
                height: '100%',
                objectFit: 'cover',
              }}
              image="https://images.pexels.com/photos/13610654/pexels-photo-13610654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image Alt Text"
            />
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  color="primary"
                >
                  ATLANTIS, THE PALM
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mr: 1 }}
                  >
                    Rating:
                  </Typography>
                  <Rating name="custom-rating" value={4.5} precision={0.5} />
                </Box>
              </CardContent>
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
                <Typography variant="body2" color="text.secondary">
                  exc taxes and fees
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
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
