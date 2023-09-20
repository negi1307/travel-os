import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper,
  Grid,
} from '@mui/material';
import { blue } from '@mui/material/colors';

const CustomerCard = () => {
  return (
    <div>
      <Box>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CardMedia
                sx={{ height: '100%', maxWidth: '100%' }}
                component="img"
                image="https://images.pexels.com/photos/13610654/pexels-photo-13610654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Image Alt Text"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  color="primary"
                >
                  QCEAN QUEEN ROOM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your paragraph goes here. You can add more text content as
                  needed.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" color="primary" sx={{ mr: 1 }}>
                    VIEW MORE INFO
                  </Typography>
                </Box>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                elevation={0}
                sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="body2" color="text.secondary">
                  STARTING FROM
                </Typography>
                <Box variant="subtitle2" sx={{ mt: 1 }}>
                  AED{' '}
                  <Typography variant="h5">
                    <b>2.050</b>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  exc taxes and fees
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1, borderRadius: '30px', width: '100%' }}
                >
                  10+ Units Available
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default CustomerCard;
