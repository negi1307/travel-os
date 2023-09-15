import React from 'react';
import SearchIndex from './searchComponent/SearchIndex';

const HomeIndex: React.FC = (props: any) => {
  const { meneItme } = props;

  return (
    <>
      <SearchIndex meneItme={meneItme} />
    </>
  );
};

export default HomeIndex;
