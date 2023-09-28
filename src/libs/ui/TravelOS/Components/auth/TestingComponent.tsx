import React from 'react';
import { logoutUser } from '../../../../store/auth/actions';
import { useDispatch } from 'react-redux';

const TestingComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Dashboard</h1>
      {/* <div>
        <button
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default TestingComponent;
