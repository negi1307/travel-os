import React from 'react';
import Routes from '../libs/ui/routes/Routes';

// import AuthIndex from '../libs/ui/TravelOS/Components/auth/AuthIndex';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
}
export const App = (props: MyComponentProps) => {
  let { meneItme } = props;

  return (
    <div>
      {/* {<AuthIndex meneItme={meneItme} />} */}
      <Routes meneItme={meneItme}></Routes>
    </div>
  );
};

export default App;
