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
// import HomeIndex from '../TravelOS/Components/pages/section/home/HomeIndex';
// import MyAccount from '../TravelOS/Components/pages/section/defaultPages/myAccount/MyAccount';

const TestingComponent = React.lazy(
  () => import('../TravelOS/Components/auth/TestingComponent')
);

const FilterIndex = React.lazy(
  () =>
    import(
      '../TravelOS/Components/pages/section/home/filterComponent/FilterIndex'
    )
);
const DefaultIndex = React.lazy(
  () => import('../TravelOS/Components/pages/section/defaultPages/DefaultIndex')
);
const MyAccount = React.lazy(
  () =>
    import(
      '../TravelOS/Components/pages/section/defaultPages/myAccount/MyAccount'
    )
);
const Faq = React.lazy(
  () => import('../TravelOS/Components/pages/section/defaultPages/faq/Faq')
);
const DownloadFactSheet = React.lazy(
  () =>
    import(
      '../TravelOS/Components/pages/section/defaultPages/downloadFactsheet/DowloadFactSheet'
    )
);

const loading = () => <div className=""></div>;

type LoadComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

interface MyComponentProps {
  meneItme?: any; // Declare the prop here
  component?: any;
}

const LoadComponent = ({
  component: Component,
  meneItme,
}: MyComponentProps) => (
  <Suspense fallback={loading()}>
    <Component meneItme={meneItme} />
  </Suspense>
);

const AllRoutes = (props: MyComponentProps) => {
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
                <LoadComponent component={SectionIndex} meneItme={meneItme} />
              ),
            },
            {
              path: 'search',
              element: (
                <LoadComponent component={FilterIndex} meneItme={meneItme} />
              ),
            },
            {
              path: 'dashboards',
              element: (
                <LoadComponent component={DefaultIndex} meneItme={meneItme} />
              ),
            },
            {
              path: 'myaccount',
              element: (
                <LoadComponent component={MyAccount} meneItme={meneItme} />
              ),
            },
            {
              path: 'faq',
              element: <LoadComponent component={Faq} meneItme={meneItme} />,
            },
            {
              path: 'hotelinfo',
              element: (
                <LoadComponent
                  component={DownloadFactSheet}
                  meneItme={meneItme}
                />
              ),
            },
            // {
            //   path: 'dashboard',
            //   children: [
            //     {
            //       path: 'home',
            //       element: (
            //         <LoadComponent component={SectionIndex} meneItme={meneItme} />
            //       ),
            //     },
            //     {
            //       path: 'search',
            //       element: (
            //         <LoadComponent component={FilterIndex} meneItme={meneItme} />
            //       ),
            //     },
            //     {
            //       path: 'dashboards',
            //       element: (
            //         <LoadComponent component={DefaultIndex} meneItme={meneItme} />
            //       ),
            //     },
          ],
        },
      ],
    },
  ]);
};

export { AllRoutes };
