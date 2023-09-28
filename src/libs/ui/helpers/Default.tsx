// @flow
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// utils
// import { changeBodyAttribute } from "../utils";

const loading = () => <div className=""></div>;

type DefaultLayoutProps = {};

const DefaultLayout = (props: DefaultLayoutProps) => {
  //   const { layoutColor } = useSelector((state) => ({
  //     layoutColor: state.Layout.layoutColor,
  //   }));

  //   useEffect(() => {
  //     changeBodyAttribute("data-layout-color", layoutColor);
  //   }, [layoutColor]);

  //   useEffect(() => {
  //     if (document.body) document.body.classList.add("authentication-bg");

  //     return () => {
  //       if (document.body) document.body.classList.remove("authentication-bg");
  //     };
  //   }, []);

  return (
    <Suspense fallback={loading()}>
      <Outlet />
    </Suspense>
  );
};
export default DefaultLayout;
