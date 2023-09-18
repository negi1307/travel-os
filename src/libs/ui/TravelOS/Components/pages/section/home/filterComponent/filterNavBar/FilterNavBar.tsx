import React from 'react';
import { Box, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './FilterNavBar.css';

import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const FilterNavBar: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <Box
        className="filter_parentBox"
        display={'flex'}
        bgcolor={'primary.main'}
        padding={3}
      >
        <Box>
          <Box display={'flex'}>
            <Box>
              <Typography>Filters : </Typography>
            </Box>
            <Box marginX={3}>
              <FormControlLabel
                value="start"
                control={<Checkbox color={'warning'} />}
                label="Beach Property"
                labelPlacement="end"
              />
            </Box>
            <Box>
              <FormControlLabel
                value="end"
                control={<Checkbox color={'warning'} />}
                label="City Property"
                labelPlacement="end"
              />
            </Box>
          </Box>
        </Box>
        <Box
          marginLeft={'auto'}
          marginRight={'auto'}
          width={'15%'}
          className="price_RangeParentbox"
        >
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            color={'warning'}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <Box marginLeft={'auto'}></Box>
      </Box>
    </>
  );
};

export default FilterNavBar;
