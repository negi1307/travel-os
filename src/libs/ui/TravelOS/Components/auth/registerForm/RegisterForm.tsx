import React, { useState } from 'react';
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
// import './RegisterForm.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import ErrorHandlingRegister from './errorRegister/ErrorHandlingRegister';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
  connectUpdate: any;
}

const RegisterForm = (props: MyComponentProps) => {
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

  //start login form data get & error handling
  const [parentOutData, setParentOutData] = useState<any>({
    first: '',
    second: '',
  });
  const [childInComing, setChildIncoming] = useState<any>('');

  const parentDataOut = (a: any, b: any) => {
    if (b === 'input') {
      setParentOutData({ first: a, second: b });
    } else if (b === 'btn') {
      setParentOutData({ first: a, second: b });
    }
  };

  const childDataIn = (item: any) => {
    setChildIncoming(item);
  };
  //end login form data get & error handling

  return (
    <>
      <Box className="register_form_main">
        <Box display={'flex'} marginLeft={3} marginTop={3}>
          <Box>
            <Typography color={'primary'}>
              <ArrowBackIosNewIcon
                className="icon_style"
                onClick={() => {
                  connectUpdate(2);
                }}
              />
            </Typography>
          </Box>
          <Box marginLeft={2} display={'flex'} alignItems={'center'}>
            <Typography variant={'h6'} color={'primary'}>
              {t(`${meneItme?.[2]?.back}`)}
            </Typography>
          </Box>
        </Box>
        <Box marginLeft={4} marginRight={4} marginTop={4}>
          <Box>
            <Typography variant={'body1'}>{t(`${registerTitle}`)}</Typography>
          </Box>
          <Box>
            <Typography color={'primary'}>
              <TextField
                fullWidth
                color={'primary'}
                label={t(`${rgFistName}`)}
                variant={'standard'}
                name="fName"
                onChange={(e) => {
                  parentDataOut(e, 'input');
                }}
              />
            </Typography>
            {
              <>
                {childInComing.typeOne === 'fName' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorFstName}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <TextField
              className="firstName_textfield"
              fullWidth
              id="standard-basic"
              label={t(`${rgLastName}`)}
              variant={'standard'}
              name="lName"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'lName' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorLstName}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgNumber}`)}
              variant={'standard'}
              name="cNumber"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'cNumber' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorNumber}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgEmail}`)}
              variant={'standard'}
              name="email"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'email' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorEmail}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <TextField
              fullWidth
              id="standard-basic"
              label={t(`${rgCode}`)}
              variant="standard"
              name="code"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'code' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${reErrorCode}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <TextField
              className="firstName_textfield"
              fullWidth
              id="standard-basic"
              label={t(`${rgName}`)}
              variant={'standard'}
              name="AgencyName"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'agencyName' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorAgencyName}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Grid container spacing={2}>
              <Grid item xs={matches ? 6 : 12}>
                <TextField
                  className="country_textfield"
                  type="dropdown"
                  id="standard-basic"
                  label={t(`${rgCountry}`)}
                  variant={'standard'}
                  name="country"
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                />
                {
                  <>
                    {childInComing.typeOne === 'country' ? (
                      <>
                        {childInComing.typeTwo === 'error' ? (
                          <>
                            <Typography color={'error'}>
                              {t(`${rgErrorCountry}`)}
                            </Typography>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                }
              </Grid>
              <Grid item xs={matches ? 6 : 12}>
                <TextField
                  className="firstName_textfield"
                  fullWidth
                  id="standard-basic"
                  label={t(`${rgCity}`)}
                  variant={'standard'}
                  name="city"
                  onChange={(e) => {
                    parentDataOut(e, 'input');
                  }}
                />
                {
                  <>
                    {childInComing.typeOne === 'city' ? (
                      <>
                        {childInComing.typeTwo === 'error' ? (
                          <>
                            <Typography color={'error'}>
                              {t(`${rgErrorCity}`)}
                            </Typography>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                }
              </Grid>
            </Grid>
          </Box>
          <Box marginTop={3} marginBottom={2}>
            <Box>
              <Typography variant={'caption'}>{t(`${rgdocument}`)}</Typography>
            </Box>

            <Box>
              <input
                // accept="image/*"
                className="button_addfile"
                id="file-input"
                type="file"
                name="file"
                onChange={(e) => {
                  parentDataOut(e, 'input');
                }}
              />

              <label htmlFor="file-input">
                <Button
                  variant={'contained'}
                  component={'span'}
                  startIcon={<AddCircleIcon />}
                >
                  {t(`${rgAddFile}`)}
                </Button>
              </label>
            </Box>
            <Box>
              {
                <>
                  {childInComing.typeOne === 'file' ? (
                    <>
                      {childInComing.typeTwo === 'error' ? (
                        <>
                          <Typography color={'error'}>
                            {t(`${rgErrorFile}`)}
                          </Typography>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              }
            </Box>
          </Box>
          <Box>
            <Typography variant={'body1'}>{t(`${rgGuideline}`)}</Typography>
          </Box>
          <Box>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              className="textarea"
              name="message"
              onChange={(e) => {
                parentDataOut(e, 'input');
              }}
            />
            {
              <>
                {childInComing.typeOne === 'message' ? (
                  <>
                    {childInComing.typeTwo === 'error' ? (
                      <>
                        <Typography color={'error'}>
                          {t(`${rgErrorMessage}`)}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            }
          </Box>
          <Box>
            <Typography variant={'caption'}>500 Words left</Typography>
          </Box>
          <Box>
            <Button
              className="expressionOfInterest_button"
              variant={'outlined'}
              onClick={() => {
                parentDataOut('button', 'btn');
              }}
            >
              {t(`${rgExpression}`)}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <ErrorHandlingRegister
          parentsDataIn={parentOutData}
          ChildDataOut={childDataIn}
        />
      </Box>
    </>
  );
};

export default RegisterForm;
