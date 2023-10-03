import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const GuestDetail = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box className="guestForm_mainParent">
      <Box>
        <Box>
          <TextField
            id="standard-basic"
            fullWidth
            label="AGENT EMAIL ID"
            variant="standard"
            InputProps={{
              sx: { paddingTop: '10px' },
            }}
          />
        </Box>
        <Box my={2}>
          <TextField
            id="standard-basic"
            fullWidth
            label="BOOKING REFERENCE NAME (IF ANY)"
            variant="standard"
            InputProps={{
              sx: { paddingTop: '10px' },
            }}
          />
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            fullWidth
            label="AGENT REFERENCE INFO (IF ANY)"
            variant="standard"
            InputProps={{
              sx: { paddingTop: '10px' },
            }}
          />
        </Box>
      </Box>

      <Box my={4} paddingTop={3}>
        <Typography variant="h5">Guest Details</Typography>
      </Box>
      <Box>
        <Box>
          <Typography>Guest 1</Typography>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <FormControl variant="standard" sx={{ m: 1, width: '75%' }}>
              <InputLabel id="demo-simple-select-standard-label">
                TITLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                fullWidth
                onChange={handleChange}
                label="TITLE"
              >
                <MenuItem
                  className="background-menu-item-gd"
                  value={10}
                  selected
                >
                  Mr.
                </MenuItem>
                <MenuItem className="background-menu-item-gd" value={20}>
                  Ms.
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            paddingRight={5}
            display={'flex'}
            alignItems={'end'}
          >
            <TextField
              id="standard-basic"
              fullWidth
              label="FIRST NAME"
              variant="standard"
              InputProps={{
                sx: { paddingTop: '10px' },
              }}
            />
          </Grid>
          <Grid item xs={4} display={'flex'} alignItems={'end'}>
            <TextField
              id="standard-basic"
              fullWidth
              label="LAST NAME"
              variant="standard"
              InputProps={{
                sx: { paddingTop: '10px' },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Typography>Guest 2</Typography>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <FormControl variant="standard" sx={{ m: 1, width: '75%' }}>
              <InputLabel id="demo-simple-select-standard-label">
                TITLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                fullWidth
                onChange={handleChange}
                label="TITLE"
              >
                <MenuItem
                  className="background-menu-item-gd"
                  value={10}
                  selected
                >
                  Mr.
                </MenuItem>
                <MenuItem className="background-menu-item-gd" value={20}>
                  Ms.
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            display={'flex'}
            paddingRight={5}
            alignItems={'end'}
          >
            <TextField
              id="standard-basic"
              fullWidth
              label="FIRST NAME"
              variant="standard"
              InputProps={{
                sx: { paddingTop: '10px' },
              }}
            />
          </Grid>
          <Grid item xs={4} display={'flex'} alignItems={'end'}>
            <TextField
              id="standard-basic"
              fullWidth
              label="LAST NAME"
              variant="standard"
              InputProps={{
                sx: { paddingTop: '10px' },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h5" my={4} paddingTop={3}>
          Any Special Request?
        </Typography>
      </Box>
      <Box my={3}>
        <Input
          id="standard-adornment-weight"
          endAdornment={<Button variant="text">Add&nbsp;+</Button>}
          aria-describedby="standard-weight-helper-text"
          fullWidth
          placeholder="Please us know of any special requests we can forword to our customer care team"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ paddingTop: '15px' }}>
          Can't find what you're looking in the list above?
        </Typography>
      </Box>
    </Box>
  );
};

export default GuestDetail;
