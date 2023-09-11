import { Navigate } from 'react-router-dom';
const Root = () => {
  const getRootUrl = () => {
    let url = 'dashboard/home';
    return url;
  };

  const url = getRootUrl();

  return <Navigate to={`/${url}`} />;
};

export default Root;
