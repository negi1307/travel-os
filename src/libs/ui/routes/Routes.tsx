import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Index";

const Routes = (props: any) => {
  const { meneItme } = props;
  return (
    <BrowserRouter>
      <AllRoutes meneItme={meneItme} />
    </BrowserRouter>
  );
};

export default Routes;
