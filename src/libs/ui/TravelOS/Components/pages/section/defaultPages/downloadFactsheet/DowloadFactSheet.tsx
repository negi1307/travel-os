import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Divider, FormControl, InputLabel, Select } from '@mui/material';

const DownloadFactSheet = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: '10%',
        backgroundColor: '#EDF7F9',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              fontFamily: 'TFArrow',
              marginBottom: 2,
              textAlign: 'center',
            }}
          >
            Download Factsheet
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <FormControl
            sx={{
              width: '100%',
              fontFamily: 'Averta PE',
            }}
          >
            <InputLabel>Choose</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              label="Choose"
            >
              <MenuItem className='my-ac-select-menu' value={10}>Atlantis, The Palm</MenuItem>
              <MenuItem className='my-ac-select-menu' value={20}>Atlantis The Royal</MenuItem>
              <MenuItem className='my-ac-select-menu' value={30}>Atlantis Sanya</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Button
            variant="contained"
            sx={{
              borderRadius: '10px',
              backgroundColor: '#0057B7',
              color: 'white',
              padding: '15px 20px',
              marginBottom: 2,
              width: '100%',
            }}
          >
            Download
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        p={4}
        marginTop={5}
      >
        <Grid  item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'TFArrow',
              // borderBottom: '1px solid black',
              // paddingBottom: 1,
              marginBottom: 2,
              fontWeight: 'bold',
              textAlign: 'start',
            }}
          >
            Middle East
          </Typography>
          <Divider sx={{width:'80%',color:'2px solid #000000'}}/>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'start',
              marginBottom: 2,
            }}
          >
            Dubai
          </Typography>
          <Grid item xs={12} md={12} display={'flex'}>
            <Grid item xs={4} md={6}>
              <Typography variant='caption'>Atlantis, The palm</Typography>
            </Grid>
            <Grid item xs={8} md={6} >
              <Typography variant='caption'>Atlantis, The Royal</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid  item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              // borderBottom: '1px solid black',
              // paddingBottom: 1,
              marginBottom: 2,
              fontWeight: 'bold',
              fontFamily: 'TFArrow',
              textAlign: 'start',
            }}
          >
            Asia
          </Typography>
          <Divider sx={{width:'80%',color:'2px solid #000000'}}/>

          <Typography
            variant="h6"
            sx={{
              textAlign: 'start',
              marginBottom: 2,
            }}
          >
            China
          </Typography>
          <Grid item xs={12}>
            <Typography variant='caption'>Atlantis Sayna</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DownloadFactSheet;
