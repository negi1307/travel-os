import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Divider, FormControl, InputLabel, Select } from '@mui/material';
import NavBar from '../../../navbar/NavBar';

const DownloadFactSheet = (props: any) => {
  const { meneItme } = props;

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <Box sx={{position:'fixed',width:'100%'}}>
        <NavBar meneItme={meneItme} />  
      </Box>
    <Box
      sx={{
        padding: '15% 2%',
        backgroundColor: '#EDF7F9',
      }}
    >
      
      <Grid container spacing={3} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{marginX:"auto"}}>
        <Grid item xs={12} md={2} sx={{paddingLeft:'0px'}}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
              fontFamily: 'TFArrow',
              marginBottom: 2,
              // textAlign: 'center',
            }}
          >
            Download Factsheet
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6.5} sx={{paddingRight:'3%'}}>
          <FormControl
          size='small'
            sx={{
              width: '100%',
              fontFamily: 'Averta PE',
              padding:'0'
            }}
          >
            <InputLabel >Choose</InputLabel>
            <Select
            sx={{height:'2%'}}
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
        <Grid item xs={10} sm={4} md={1.5}>
          <Button
            variant="contained"
            sx={{
              borderRadius: '10px',
              backgroundColor: '#0057B7',
              color: 'white',
              padding: '10px 15px',
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
        px={5}
        py={2}
        marginTop={1}
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
          <Divider sx={{width:'100%',color:'2px solid #000000'}}/>
          <Typography
            variant="h6"
            sx={{
              lineHeight:'24.72px',
              textAlign: 'start',
              marginY: 2,
              
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
          <Divider sx={{width:'100%',color:'2px solid #000000'}}/>

          <Typography
            variant="h6"
            sx={{
              lineHeight:'24.72px',

              textAlign: 'start',
              marginY: 2,
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
    </>
  );
};

export default DownloadFactSheet;
