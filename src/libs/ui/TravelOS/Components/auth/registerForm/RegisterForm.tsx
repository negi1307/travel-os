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

const RegisterForm = (props: any) => {
  const { connectUpdate, meneItme } = props;
  const { t } = useTranslation();
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
      <Grid container className="register_form_main" direction={'row'} xs={12}>
        <Grid xs={3} container>
          <Grid item xs={7} md={3} lg={2}>
            <ArrowBackIosNewIcon
              className="back_arrow"
              onClick={() => {
                connectUpdate(2);
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="body1"
              color="#8f7f67"
              marginTop="15px"
              fontSize="23px"
            >
              {t(`${back}`)}
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} marginTop={'20px'} justifyContent={'center'} container>
          <Grid xs={10} item>
            <Typography color={'white'} fontSize={'20px'} variant="body1">
              {t(`${registerTitle}`)}
            </Typography>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              fullWidth
              className="firstName_textfield"
              id="standard-basic"
              label={t(`${rgFistName}`)}
              variant="standard"
              name="fName"
              onChange={(e) => {
                onchangeRegister(e);
              }}
            />
            <span>
              {fNameError ? (
                <>
                  <span className="text-danger">Please Enter Name</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps={{
                style: { borderBottomColor: 'white' },
              }}
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
                  <span className="text-danger">Please Enter Last Name</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="firstName_textfield"
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
                  <span className="text-danger">Please Enter Number</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="firstName_textfield"
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
                  <span className="text-danger">Please Enter Email</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="firstName_textfield"
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
                  <span className="text-danger">Please Enter Code</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
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
                  <span className="text-danger">Please Enter Agency Name</span>
                </>
              ) : (
                <></>
              )}
            </span>
          </Grid>
          <Grid xs={10} container>
            <Grid
              xs={12}
              sm={12}
              md={6}
              item
              alignItems={'center'}
              justifyContent={'center'}
            >
              <TextField
                InputLabelProps={{
                  style: { color: 'white' },
                }}
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
                    <span className="text-danger">Please Enter Country</span>
                  </>
                ) : (
                  <></>
                )}
              </span>
            </Grid>
            <Grid justifyContent={'flex-end'} xs={12} sm={12} md={6} item>
              <TextField
                InputLabelProps={{
                  style: { color: 'white' },
                }}
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
                    <span className="text-danger">Please Enter City</span>
                  </>
                ) : (
                  <></>
                )}
              </span>
            </Grid>

            <Grid marginTop={'30px'} xs={8} container>
              <Grid item xs={8} sm={8}>
                <Typography color="white" variant="caption">
                  {t(`${rgdocument}`)}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <input
                  accept="image/*"
                  className="button_addfile"
                  id="file-input"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    onchangeRegister(e);
                  }}
                />
                <span>
                  {fileError ? (
                    <>
                      <span className="text-danger">Please Enter File</span>
                    </>
                  ) : (
                    <></>
                  )}
                </span>
                <label htmlFor="file-input">
                  <Button
                    variant="contained"
                    className="button_addfield_color"
                    component="span"
                  >
                    <AddCircleIcon className="plusIcon_addfile_button" />
                    {t(`${rgAddFile}`)}
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Box marginTop={2}>
              <Grid container>
                <Typography>
                  <Grid item>
                    <Typography color={'white'} variant="caption">
                      {t(`${rgGuideline}`)}
                    </Typography>
                  </Grid>
                </Typography>
              </Grid>
            </Box>
            <Grid container xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                color="black"
                className="textarea"
                name="message"
                onChange={(e) => {
                  onchangeRegister(e);
                }}
              />
              <span>
                {messageError ? (
                  <>
                    <span className="text-danger">Please Enter Message</span>
                  </>
                ) : (
                  <></>
                )}
              </span>
            </Grid>
            <Grid justifyContent={'flex-end'} container xs={12}>
              <Typography color={'white'} variant="caption">
                500 Words left
              </Typography>
            </Grid>
            <Grid xs={4} container>
              {/* <ReCAPTCHA
                style={{ width: '100%' }}
                className="text-start mt-3"
                sitekey="6LcIuconAAAAAGqGZ4_daYgUoj4OHVZEUFdEQC3f"
              /> */}
            </Grid>
            <Grid xs={12} container>
              <Button
                className="expressionOfInterest_button"
                variant="outlined"
                onClick={() => {
                  registerSubmit();
                }}
              >
                {t(`${rgExpression}`)}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterForm;
