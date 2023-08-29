import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
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
  console.log(meneItme?.[2], 'testing');

  return (
    <>
      <Grid
        container
        style={{ backgroundColor: 'black' }}
        direction={'row'}
        xs={12}
      >
        <Grid xs={2} container>
          <Grid item xs={3}>
            <ArrowBackIosNewIcon
              style={{
                width: '40px',
                height: '40px',
                color: 'white',
                border: '1px solid #8f7f67',
                borderRadius: '150px',
                margin: '12px',
                padding: '12px',
              }}
              onClick={() => {
                connectUpdate(2);
              }}
            />
          </Grid>
          <Grid item xs={9}>
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
              {/* Please fill in the details below, the expression of interest will
              be submitted to the Global Sales team and they will contact you
              after review. */}
            </Typography>
          </Grid>
          <Grid xs={10} marginTop={'50px'} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              //   style={{ width: '100%' }}
              fullWidth
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              id="standard-basic"
              label={t(`${rgFistName}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              inputProps={{
                style: { borderBottomColor: 'white' }, // Change the border bottom color here
              }}
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              fullWidth
              id="standard-basic"
              label={t(`${rgLastName}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              fullWidth
              id="standard-basic"
              label={t(`${rgNumber}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              fullWidth
              id="standard-basic"
              label={t(`${rgEmail}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              fullWidth
              id="standard-basic"
              label={t(`${rgCode}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} item>
            <TextField
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ borderBottom: '1px solid white', marginTop: '15px' }}
              fullWidth
              id="standard-basic"
              label={t(`${rgName}`)}
              variant="standard"
            />
          </Grid>
          <Grid xs={10} container>
            <Grid xs={6} item alignItems={'center'} justifyContent={'center'}>
              <TextField
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                style={{
                  borderBottom: '1px solid white',
                  marginTop: '15px',
                  width: '98%',
                }}
                type="dropdown"
                // fullWidth
                id="standard-basic"
                label={t(`${rgCountry}`)}
                variant="standard"
              />
            </Grid>
            <Grid justifyContent={'flex-end'} xs={6} item>
              <TextField
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                style={{
                  borderBottom: '1px solid white',
                  marginTop: '15px',
                }}
                fullWidth
                id="standard-basic"
                label={t(`${rgCity}`)}
                variant="standard"
              />
            </Grid>

            <Grid marginTop={'30px'} xs={3} container>
              <Grid item xs={8}>
                <Typography color="white" variant="caption">
                  {t(`${rgdocument}`)}
                  {/* DOCUMENT UPLOADED */}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <input
                  accept="image/*" // Specify accepted file types if needed
                  style={{ display: 'none' }}
                  id="file-input"
                  type="file"
                />
                <label htmlFor="file-input">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: 'rgb(236, 167, 46)' }}
                    component="span"
                  >
                    <AddCircleIcon style={{ color: 'white' }} />
                    {t(`${rgAddFile}`)}
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid container>
              <Typography>
                <Grid item xs={5}>
                  <Typography color={'white'} variant="caption">
                    {t(`${rgGuideline}`)}
                  </Typography>
                </Grid>
              </Typography>
            </Grid>
            <Grid container xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                color="black"
                // placeholder="Type your text here..."
                style={{
                  padding: '10px',
                  background: 'black',
                  border: '1px solid  rgb(251, 232, 200)',
                  marginTop: '15px',
                  color: 'white',
                  width: '100%',
                }}
              />
            </Grid>
            {/* <Grid justifyContent={'flex-end'} container xs={12}>
              <Typography color={'white'} variant="caption">
                500 Words left
              </Typography>
            </Grid> */}
            <Grid xs={4} container>
              {/* <ReCAPTCHA
                style={{ width: '100%' }}
                className="text-start mt-3"
                sitekey="6LcIuconAAAAAGqGZ4_daYgUoj4OHVZEUFdEQC3f"
              /> */}
            </Grid>
            <Grid xs={12} container>
              <Button
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                  color: 'rgb(251, 232, 200)',
                  borderColor: 'rgb(251, 232, 200)',
                }}
                variant="outlined"
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
