import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
  Box,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './RegisterForm.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
const RegisterForm = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const {
    rgErrorFstName,
    rgErrorLstName,
    rgErrorNumber,
    rgErrorEmail,
    reErrorCode,
    rgErrorAgencyName,
    rgErrorCountry,
    rgErrorCity,
    rgErrorFile,
    rgErrorMessage,
  } = meneItme?.[4];
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width:600px)');

  const {
    registerTitle,
    rgAddFile,
    rgCity,
    rgCode,
    rgCountry,
    rgEmail,
    rgExpression,
    rgFistName,
    rgGuideline,
    rgLastName,
    rgName,
    rgNumber,
    rgdocument,
    back,
  } = meneItme?.[2];

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
  const [errorCheck, setErrorCheck] = useState(false);
  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const [cNumberError, setCNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [agencyNameError, setAgencyNameError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [messageError, setMessageError] = useState(false);
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
        setFNameError(false);
        if (registerInput.lName !== '') {
          setLNameError(false);
          if (registerInput.cNumber !== '') {
            setCNumberError(false);
            if (registerInput.email !== '') {
              setEmailError(false);
              if (registerInput.code !== '') {
                setCodeError(false);
                if (registerInput.AgencyName !== '') {
                  setAgencyNameError(false);
                  if (registerInput.country !== '') {
                    setCountryError(false);
                    if (registerInput.city !== '') {
                      setCityError(false);
                      if (registerInput.file !== '') {
                        setFileError(false);
                        if (registerInput.message !== '') {
                          setMessageError(false);
                          setConfim(true);
                        } else {
                          setMessageError(true);
                          setConfim(false);
                        }
                      } else {
                        setFileError(true);
                      }
                    } else {
                      setCityError(true);
                    }
                  } else {
                    setCountryError(true);
                  }
                } else {
                  setAgencyNameError(true);
                }
              } else {
                setCodeError(true);
              }
            } else {
              setEmailError(true);
            }
          } else {
            setCNumberError(true);
          }
        } else {
          setLNameError(true);
        }
      } else {
        setFNameError(true);
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

  return (
    <>
      <Box className="register_form_main">
        <Box display="flex" marginLeft={3} marginTop={3}>
          <Box
            border={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={6}
          >
            <Typography color="primary">
              <ArrowBackIosNewIcon
                className="icon_style"
                onClick={() => {
                  connectUpdate(2);
                }}
              />
            </Typography>
          </Box>
          <Box marginLeft={2} display={'flex'} alignItems={'center'}>
            <Typography variant="h6" color="primary">
              {t(`${meneItme?.[2]?.back}`)}
            </Typography>
          </Box>
        </Box>
        <Box marginLeft={4} marginRight={4} marginTop={4}>
          <Box>
            <Typography variant="body1">{t(`${registerTitle}`)}</Typography>
          </Box>
          <Box>
            <Typography color={'primary'}>
              <TextField
                fullWidth
                color="primary"
                label={t(`${rgFistName}`)}
                variant="standard"
                name="fName"
                onChange={(e) => {
                  onchangeRegister(e);
                }}
              />
            </Typography>
            <span>
              {fNameError ? (
                <>
                  <span className="text-danger">{t(`${rgErrorFstName}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <TextField
              className="firstName_textfield"
              fullWidth
              id="standard-basic"
              label={t(`${rgLastName}`)}
              variant="standard"
              name="lName"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {lNameError ? (
                <>
                  <span className="text-danger">{t(`${rgErrorLstName}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgNumber}`)}
              variant="standard"
              name="cNumber"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {cNumberError ? (
                <>
                  <span className="text-danger">{t(`${rgErrorNumber}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgEmail}`)}
              variant="standard"
              name="email"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {emailError ? (
                <>
                  <span className="text-danger">{t(`${rgErrorEmail}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgCode}`)}
              variant="standard"
              name="code"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {codeError ? (
                <>
                  <span className="text-danger">{t(`${reErrorCode}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <TextField
              className="firstName_textfield"
              fullWidth
              id="standard-basic"
              label={t(`${rgName}`)}
              variant="standard"
              name="AgencyName"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {agencyNameError ? (
                <>
                  <span className="text-danger">
                    {t(`${rgErrorAgencyName}`)}
                  </span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Grid container spacing={2}>
              <Grid item xs={matches ? 6 : 12}>
                <TextField
                  className="country_textfield"
                  type="dropdown"
                  id="standard-basic"
                  label={t(`${rgCountry}`)}
                  variant="standard"
                  name="country"
                  onChange={(e) => {
                    onchangeRegister(e);
                  }}
                />
                <span>
                  {countryError ? (
                    <>
                      <span className="text-danger">
                        {t(`${rgErrorCountry}`)}
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </span>
              </Grid>
              <Grid item xs={matches ? 6 : 12}>
                <TextField
                  className="firstName_textfield"
                  fullWidth
                  id="standard-basic"
                  label={t(`${rgCity}`)}
                  variant="standard"
                  name="city"
                  onChange={(e) => {
                    onchangeRegister(e);
                  }}
                />
                <span>
                  {cityError ? (
                    <>
                      <span className="text-danger">{t(`${rgErrorCity}`)}</span>
                    </>
                  ) : (
                    <></>
                  )}
                </span>
              </Grid>
            </Grid>
          </Box>
          <Box marginTop={3} marginBottom={2}>
            <Box>
              <Typography variant="caption">{t(`${rgdocument}`)}</Typography>
            </Box>

            <Box>
              <input
                // accept="image/*"
                className="button_addfile"
                id="file-input"
                type="file"
                name="file"
                onChange={(e) => {
                  onchangeRegister(e);
                }}
              />

              <label htmlFor="file-input">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<AddCircleIcon />}
                >
                  {t(`${rgAddFile}`)}
                </Button>
              </label>
            </Box>
            <Box>
              <span>
                {fileError ? (
                  <>
                    <span className="text-danger">{t(`${rgErrorFile}`)}</span>
                  </>
                ) : (
                  <></>
                )}
              </span>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1">{t(`${rgGuideline}`)}</Typography>
          </Box>
          <Box>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              className="textarea"
              name="message"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {messageError ? (
                <>
                  <span className="text-danger">{t(`${rgErrorMessage}`)}</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Box>
          <Box>
            <Typography variant="caption">500 Words left</Typography>
          </Box>
          <Box>
            <Button
              className="expressionOfInterest_button"
              variant="outlined"
              onClick={() => {
                registerSubmit();
              }}
            >
              {t(`${rgExpression}`)}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RegisterForm;
