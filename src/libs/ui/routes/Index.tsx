import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import DefaultLayout from '../helpers/Default';

// auth
const AuthIndex = React.lazy(
  () => import('../TravelOS/Components/auth/AuthIndex')
);

const SectionIndex = React.lazy(
  () => import('../TravelOS/Components/pages/PageIndex')
);
import HomeIndex from '../TravelOS/Components/pages/section/home/HomeIndex';

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
      element: (
        <PrivateRoute
          roles={'Admin'}
          component={SectionIndex}
          meneItme={meneItme}
        />
      ),
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'home',
              element: (
                <LoadComponent component={HomeIndex} meneItme={meneItme} />
              ),
            },
            {
              path: 'dashboards',
              element: (
                <LoadComponent
                  component={TestingComponent}
                  meneItme={meneItme}
                />
              ),
            },
          ],
        },
      ],
    },
  ]);
};

export { AllRoutes };
