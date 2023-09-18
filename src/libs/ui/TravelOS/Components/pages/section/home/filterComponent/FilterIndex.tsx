import React from 'react';
import FilterNavBar from './filterNavBar/FilterNavBar';
import FilterItemOne from './filterItem/filterItemone/FilterItemOne';
import FilterItemTwo from './filterItem/filterItemTwo/FilterItemTwo';
import { Box } from '@mui/material';
const FilterIndex: React.FC = () => {
  return (
    <>
      <Box>
        <Box>
          <FilterNavBar />
        </Box>
        <Box>
          <FilterItemOne />
        </Box>
        <Box>
          <FilterItemTwo />
        </Box>
      </Box>
    </>
  );
};

export default FilterIndex;
