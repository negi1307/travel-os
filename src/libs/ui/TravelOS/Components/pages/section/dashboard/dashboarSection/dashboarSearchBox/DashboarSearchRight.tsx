import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import './DashboarSearch.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DashboarSearchRight = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      className="heigth selector_parentBox"
      marginRight={'auto'}
      marginLeft={'auto'}
    >
      <Box display={'flex'} justifyContent={'center'}>
        <Typography>Dashboard Search</Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          className="selector_parent"
          // position={'absolute'}
          // top={'0px'}
          // bottom={'0'}
          // left={'0px'}
          // right={'0'}
        >
          <Grid item xs={12}>
            <Box display={'flex'} alignItems={'center'}>
              <Typography className="select_text_font_style same_fontCss">
                Filter by
              </Typography>{' '}
              <Box
                className="selector_innerBox"
                display={'flex'}
                alignItems={'center'}
                flex={1}
              >
                <FormControl className="selector_body1 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="selector_body2 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Typography className="select_text_font_style same_fontCss">
                Filter by
              </Typography>{' '}
              <Box
                className="selector_innerBox"
                display={'flex'}
                alignItems={'center'}
                flex={1}
              >
                <FormControl className="selector_body1 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="selector_body2 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Typography className="select_text_font_style same_fontCss">
                Filter by
              </Typography>{' '}
              <Box
                className="selector_innerBox"
                display={'flex'}
                alignItems={'center'}
                flex={1}
              >
                <FormControl className="selector_body1 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="selector_body2 common_selectorCss">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    className="select_wight_hight"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              display={'flex '}
              // position={'absolute'}
              // top={'129px'}
              // bottom={'0'}
              // left={'169px'}
              // right={'0'}
            >
              <Box>
                <Button
                  variant="outlined"
                  className="selector_button_font_style"
                >
                  Search
                </Button>
              </Box>
              <Box marginLeft={5}>
                <Button
                  variant="outlined"
                  className="selector_button_font_style"
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboarSearchRight;
