import { Box } from '@mui/material';
import React from 'react';
import SearchIndex from './searchComponent/SearchIndex';
import FilterIndex from './filterComponent/FilterIndex';

const HomeIndex: React.FC = (props: any) => {
  const { meneItme } = props;

  return (
    <>
      <Box>
        <Box>
          <SearchIndex meneItme={meneItme} />
        </Box>
        {/* <Box>
          <FilterIndex />
        </Box> */}
      </Box>
    </>
  );
};

export default HomeIndex;
