import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

const PaymentInformation = () => {
  return (
    <Box p={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} sx={{ backgroundColor: '#ecf7fa' }}>
          <Box>
            <Box>
              <Typography variant="h5">Payment Information</Typography>
            </Box>
            <Box>
              <TextField
                id="standard-basic"
                fullWidth
                label="CARD HOLDER NAME"
                variant="standard"
              />
            </Box>

            <Box my={3}>
              <TextField
                id="standard-basic"
                fullWidth
                label="CARD NUMBER"
                variant="standard"
              />
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ backgroundColor: '#ecf7fa' }}>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="MM/YY"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ backgroundColor: '#ecf7fa' }}>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="cvc"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentInformation;
