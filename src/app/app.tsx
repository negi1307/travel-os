import React from 'react';
import Routes from '../libs/ui/routes/Routes';

// import AuthIndex from '../libs/ui/TravelOS/Components/auth/AuthIndex';
export const App: React.FC = (props: any) => {
  let { meneItme } = props;

  return (
    <div>
      {/* {<AuthIndex meneItme={meneItme} />} */}
      <Routes meneItme={meneItme}></Routes>
    </div>
  );
};

export default App;
