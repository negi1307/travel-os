import React, { useState, useEffect } from 'react';

interface dataType {
  first?: string;
  second?: string;
}

const ErrorHandlingRegister: React.FC = (props: dataType | any) => {
  const { parentsDataIn, ChildDataOut } = props;
  const [registerInput, setRegisterInput] = useState({
    fName: '',
    lName: '',
    cNumber: '',
    email: '',
    code: '',
    AgencyName: '',
    country: '',
    city: '',
    file: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    typeOne: '',
    typeTwo: '',
  });
  const [errorCheck, setErrorCheck] = useState(false);
  const [confim, setConfim] = useState(false);

  const onchangeRegister = (e: any) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  const registerSubmit = () => {
    setErrorCheck(true);
    if (confim) {
      console.log(registerInput, 'check');
    }
  };

  useEffect(() => {
    if (errorCheck) {
      if (registerInput.fName !== '') {
        setErrorMessage({ typeOne: 'fName', typeTwo: 'resp' });
        if (registerInput.lName !== '') {
          setErrorMessage({ typeOne: 'lName', typeTwo: 'resp' });
          if (registerInput.cNumber !== '') {
            setErrorMessage({ typeOne: 'cNumber', typeTwo: 'resp' });
            if (registerInput.email !== '') {
              setErrorMessage({ typeOne: 'email', typeTwo: 'resp' });
              if (registerInput.code !== '') {
                setErrorMessage({ typeOne: 'code', typeTwo: 'resp' });
                if (registerInput.AgencyName !== '') {
                  setErrorMessage({ typeOne: 'agencyName', typeTwo: 'resp' });
                  if (registerInput.country !== '') {
                    setErrorMessage({ typeOne: 'country', typeTwo: 'resp' });
                    if (registerInput.city !== '') {
                      setErrorMessage({ typeOne: 'city', typeTwo: 'resp' });
                      if (registerInput.file !== '') {
                        if (registerInput.message !== '') {
                          setErrorMessage({
                            typeOne: 'message',
                            typeTwo: 'resp',
                          });
                          setConfim(true);
                        } else {
                          setConfim(false);
                          setErrorMessage({
                            typeOne: 'message',
                            typeTwo: 'error',
                          });
                        }
                      } else {
                        setErrorMessage({ typeOne: 'file', typeTwo: 'error' });
                      }
                    } else {
                      setErrorMessage({ typeOne: 'city', typeTwo: 'error' });
                    }
                  } else {
                    setErrorMessage({ typeOne: 'country', typeTwo: 'error' });
                  }
                } else {
                  setErrorMessage({ typeOne: 'agencyName', typeTwo: 'error' });
                }
              } else {
                setErrorMessage({ typeOne: 'code', typeTwo: 'error' });
              }
            } else {
              setErrorMessage({ typeOne: 'email', typeTwo: 'error' });
            }
          } else {
            setErrorMessage({ typeOne: 'cNumber', typeTwo: 'error' });
          }
        } else {
          setErrorMessage({ typeOne: 'lName', typeTwo: 'error' });
        }
      } else {
        setErrorMessage({ typeOne: 'fName', typeTwo: 'error' });
      }
    }
  }, [
    errorCheck,
    registerInput.fName,
    registerInput.lName,
    registerInput.cNumber,
    registerInput.email,
    registerInput.code,
    registerInput.AgencyName,
    registerInput.country,
    registerInput.city,
    registerInput.file,
    registerInput.message,
  ]);

  // useEffect use IncomingData
  useEffect(() => {
    if (parentsDataIn.second === 'input') {
      onchangeRegister(parentsDataIn.first);
    } else if (parentsDataIn.second === 'btn') {
      registerSubmit();
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

export default ErrorHandlingRegister;
