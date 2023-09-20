import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigate, useLocation } from 'react-router-dom';
import { APICore } from '../helpers/apiCore';
type PrivateRouteProps = {
  component: React.ComponentType;
  roles?: string;
};

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const loading = () => <div className=""></div>;

const PrivateRoute = ({
  component: RouteComponent,
  roles,
  meneItme,
  ...rest
}: PrivateRouteProps) => {
  let location = useLocation();
  const api = new APICore();
  const loggedInUser = api.getLoggedInUser();
  console.log(meneItme, 'meneItme333');
  /**
   * not logged in so redirect to login page with the return url
   */
  if (api.isUserAuthenticated() === false) {
    return (
      <Navigate to={'/account/login'} state={{ from: location }} replace />
    );
  }

  // check if route is restricted by role
  if (roles && roles.indexOf(loggedInUser.role) === -1) {
    // role not authorised so redirect to home page
    return <Navigate to={{ pathname: '/' }} />;
  }

  // return <RouteComponent meneItme={meneItme} />;
  return (
    <Suspense fallback={loading()}>
      <Outlet meneItme={meneItme} />
    </Suspense>
  );
};

export default PrivateRoute;
