import React from "react";
import { logoutUser } from "src/libs/store/actions";
import { useDispatch } from "react-redux";

const TestingComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Login Success</h1>
      <div>
        <button
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TestingComponent;
