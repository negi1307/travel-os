import React, { useState, useEffect } from 'react';

interface dataType {
  first?: string;
  second?: string;
}

const ErrorHandlingLogin: React.FC<dataType> = (props: any) => {
  const { parentsDataIn, ChildDataOut } = props;
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [errorCheck, setErrorCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    typeOne: '',
    typeTwo: '',
  });
  const [comfim, setComfim] = useState(false);

  const onchangetInput = (e: any) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitInput = () => {
    setErrorCheck(true);
    if (comfim) {
      console.log(loginInput, 'success');
    }
  };

  useEffect(() => {
    if (errorCheck) {
      if (loginInput.email !== '') {
        setErrorMessage({ typeOne: 'email', typeTwo: 'resp' });
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (loginInput.email.match(validRegex)) {
          setErrorMessage({ typeOne: 'emailValid', typeTwo: 'resp' });
          if (loginInput.password !== '') {
            setErrorMessage({ typeOne: 'password', typeTwo: 'resp' });
            setComfim(true);
          } else {
            setErrorMessage({ typeOne: 'password', typeTwo: 'error' });
          }
        } else {
          setErrorMessage({ typeOne: 'emailValid', typeTwo: 'error' });
        }
      } else {
        setErrorMessage({ typeOne: 'email', typeTwo: 'error' });
      }
    }
  }, [errorCheck, loginInput.email, loginInput.password]);

  // useEffect use IncomingData
  useEffect(() => {
    if (parentsDataIn.second === 'input') {
      onchangetInput(parentsDataIn.first);
    } else if (parentsDataIn.second === 'btn') {
      onSubmitInput();
    }
  }, [parentsDataIn]);

  //end useEffect use IncomingData

  //start useEffect use out
  useEffect(() => {
    if (errorMessage.typeOne !== '') {
      ChildDataOut(errorMessage);
    }
  }, [errorMessage]);
  //out useEffect use out

  return;
};

export default ErrorHandlingLogin;
