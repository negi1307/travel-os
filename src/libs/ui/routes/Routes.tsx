import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './Index';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
}

const Routes = (props: MyComponentProps) => {
  const { meneItme } = props;
  return (
    <BrowserRouter>
      <AllRoutes meneItme={meneItme} />
    </BrowserRouter>
  );
};

export default Routes;
