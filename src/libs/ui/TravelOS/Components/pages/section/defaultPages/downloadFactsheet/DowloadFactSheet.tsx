import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select } from '@mui/material';

const DownloadFactSheet = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 15,
        backgroundColor: '#EDF7F9',
      }}
    >
      <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontFamily: 'TFArrow',
              marginBottom: 2,
              alignItems: 'center',
              marginLeft: 2,
              marginRight: 2,
              fontSize: '35px',
            }}
          >
            Download Factsheet
          </Typography>
          <FormControl
            sx={{
              width: '55%',
              marginRight: 5,
              fontFamily: 'Averta PE',
            }}
          >
            <InputLabel>Choose</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              label="Choose"
            >
              <MenuItem disabled value="">
                <em>Choose</em>
              </MenuItem>
              <MenuItem value={10}>Atlantis, The Palm</MenuItem>
              <MenuItem value={20}>Atlantis The Royal</MenuItem>
              <MenuItem value={30}>Atlantis Sanya</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              borderRadius: '10px',
              backgroundColor: '#0057B7',
              color: 'white',
              padding: '15px 20px',
              marginBottom: 2,
            }}
          >
            Download
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        marginTop={15}
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid item xs={6}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'TFArrow',
              borderBottom: '1px solid black',
              paddingBottom: 1,
              marginBottom: 2,
              fontWeight: 'bold',
              fontSize: '25px',
              textAlign: 'start',
              marginRight: 11,
            }}
          >
            Middle East
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'start',
              marginBottom: 2,
            }}
          >
            Dubai
          </Typography>

          <Grid item display={'flex'} xs={12}>
            <Grid item xs={4} display={'flex'} justifyContent={'start'}>
              <Typography>Atlantis, The palm</Typography>
            </Grid>
            <Grid item xs={8} display={'flex'} justifyContent={'start'}>
              {' '}
              <Typography>Atlantis, The Royal</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: '1px solid black',
              paddingBottom: 1,
              marginBottom: 2,
              fontWeight: 'bold',
              fontSize: '25px',
              fontFamily: 'TFArrow',
              textAlign: 'start',
            }}
          >
            Asia
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'start',
              marginBottom: 2,
            }}
          >
            China
          </Typography>
          <Grid item display={'flex'} justifyContent={'start'} xs={12}>
            <Typography>Atlantis Sayna</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DownloadFactSheet;
