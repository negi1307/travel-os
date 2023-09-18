import React, { useState } from 'react';
import Login from './loginForm/LoginForm';
import LoginIndex from './loginForm/LoginIndex';
import RegisterForm from './registerForm/RegisterForm';
import RegistraterGuidelines from './registerGuidelines/RegisterGuidelines';
interface connectType {
  item: number;
}
const AuthIndex: React.FC<connectType> = (props: any) => {
  const { meneItme } = props;

  const [connectComponent, setConnectComponent] = useState(1);

  const connectUpdate = (item: number) => {
    setConnectComponent(item);
  };

  return (
    <div>
      {connectComponent === 1 ? (
        <>
          <LoginIndex connectUpdate={connectUpdate} meneItme={meneItme} />
        </>
      ) : connectComponent === 2 ? (
        <>
          <RegistraterGuidelines
            connectUpdate={connectUpdate}
            meneItme={meneItme}
          />
        </>
      ) : (
        <>
          <RegisterForm connectUpdate={connectUpdate} meneItme={meneItme} />
        </>
      )}
    </div>
  );
};

export default AuthIndex;
