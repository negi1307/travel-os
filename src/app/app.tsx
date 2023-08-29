import React from 'react';

import AuthIndex from '../libs/ui/TravelOS/Components/auth/AuthIndex';
export const App: React.FC = (props: any) => {
  let { meneItme } = props;
  return <div>{<AuthIndex meneItme={meneItme} />}</div>;
};

export default App;
