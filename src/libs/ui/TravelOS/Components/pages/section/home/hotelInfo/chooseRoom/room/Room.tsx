import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import CustomerCard from './CustomerCard';
const Room = () => {
  return (
    <div>
      <Container>
        <CustomerCard />

        <Box
          sx={{
            backgroundImage: `url('https://images.pexels.com/photos/13610654/pexels-photo-13610654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, // Replace 'your-image-url.jpg' with your actual image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '40vh', // Adjust the height as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h4" component="div">
            CHOOSE YOUR RATE OF <br /> RESORT DELUXE
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 1
                </Typography>
                <Typography variant="body2">
                  This is the content of card 1.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 2
                </Typography>
                <Typography variant="body2">
                  This is the content of card 2.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Room;
