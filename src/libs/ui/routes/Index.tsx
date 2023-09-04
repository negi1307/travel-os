import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import DefaultLayout from '../helpers/Default';

// auth
const AuthIndex = React.lazy(
  () => import('../TravelOS/Components/auth/AuthIndex')
);

const TestingComponent = React.lazy(
  () => import('../TravelOS/Components/auth/TestingComponent')
);

const loading = () => <div className=""></div>;

type LoadComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({
  component: Component,
  meneItme,
}: LoadComponentProps) => (
  <Suspense fallback={loading()}>
    <Component meneItme={meneItme} />
  </Suspense>
);

const AllRoutes = (props: any) => {
  const { meneItme } = props;

  return useRoutes([
    { path: '/', element: <Root /> },
    {
      // public routes
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: 'account',
          children: [
            {
              path: 'login',
              element: (
                <LoadComponent component={AuthIndex} meneItme={meneItme} />
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <PrivateRoute roles={'Admin'} component={TestingComponent} />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'ecommerce',
              element: <LoadComponent component={TestingComponent} />,
            },
          ],
        },
      ],
    },
  ]);
};

export { AllRoutes };
