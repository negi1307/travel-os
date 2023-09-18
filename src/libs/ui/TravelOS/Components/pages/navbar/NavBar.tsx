import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import InsightsIcon from '@mui/icons-material/Insights';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpIcon from '@mui/icons-material/Help';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { logoutUser } from '../../../../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';

const NavBar: React.FC = (props: any) => {
  const { meneItme } = props;
  const { t } = useTranslation();

  const {
    home_navBar_icon,
    home,
    speed,
    user,
    information,
    hotel,
    bell,
    navBar_bground,
  } = meneItme?.[7]?.homepg?.[0]?.nvBarIcon?.[0];
  const { nvBarHome, nvBarDashbaod, nvBarMyAccount, nvBarFAQs, nvBarHoteInfo } =
    meneItme?.[7]?.homepg?.[0]?.nvBarText?.[0];
  // common use margine,border,bgColor
  let marginLeft2 = 2;
  let borderRadius5 = 5;
  let paddingX2 = 2;
  let marginX4 = 5;
  let bgcolorPrimaryMain = 'primary.main';

  const location = useLocation();
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const userd = store?.Auth?.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (userd == null) {
      navigate('/');
    }
  }, [userd]);

  return (
    <div>
      <Box
        display={'flex'}
        sx={{ backgroundImage: `url("${navBar_bground}")` }}
        height={'102px'}
        paddingLeft={4}
        paddingRight={4}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexGrow={1}
          flexShrink={1}
          flexBasis={1}
        >
          <Box>
            <img src={home_navBar_icon} alt="companyLogo" />
          </Box>
          <Box
            display={'flex'}
            flexGrow={1}
            flexShrink={1}
            flexBasis={1}
            paddingLeft={4}
            alignItems={'center'}
          >
            <Box
              className={
                location?.pathname === '/dashboard/home'
                  ? 'navbar_linkcss'
                  : 'navbar_notActive'
              }
              display={'flex'}
              alignItems={'center'}
              paddingLeft={2}
              paddingRight={2}
              // paddingX={paddingX2}
              // borderRadius={
              //   location?.pathname === '/dashboard/home' ? borderRadius5 : ''
              // }
              // bgcolor={
              //   location?.pathname === '/dashboard/home'
              //     ? bgcolorPrimaryMain
              //     : ''
              // }
            >
              <Box>
                <img src={home} alt="" />
              </Box>
              <Box className="navbar_linkFont" marginLeft={2}>
                <Typography>
                  <Link to="/dashboard/home" className="navBar_link">
                    {t(`${nvBarHome}`)}
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              marginX={marginX4}
              paddingX={paddingX2}
              display={'flex'}
              // borderRadius={
              //   location?.pathname === '/dashboard/dashboards'
              //     ? borderRadius5
              //     : ''
              // }
              // bgcolor={
              //   location?.pathname === '/dashboard/dashboards'
              //     ? bgcolorPrimaryMain
              //     : ''
              // }
              className={
                location?.pathname === '/dashboard/dashboards'
                  ? 'navbar_linkcss'
                  : ''
              }
            >
              <Box>
                <img src={speed} alt="" />
              </Box>
              <Box
                className="navbar_linkFont active_link"
                marginLeft={marginLeft2}
              >
                <Typography>
                  <Link to="/dashboard/dashboards" className="navBar_link">
                    {t(`${nvBarDashbaod}`)}
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box display={'flex'}>
              <Box>
                <img src={user} alt="" />
              </Box>
              <Box marginLeft={marginLeft2}>
                <Link to="/" className="navBar_link">
                  {t(`${nvBarMyAccount}`)}
                </Link>
              </Box>
            </Box>
            <Box marginX={marginX4} display={'flex'}>
              <Box>
                <img src={information} alt="" />
              </Box>
              <Box marginLeft={marginLeft2}>
                <Link to="/" className="navBar_link">
                  {t(`${nvBarFAQs}`)}
                </Link>
              </Box>
            </Box>
            <Box display={'flex'}>
              <Box>
                <img src={hotel} alt="" />
              </Box>
              <Box marginLeft={marginLeft2}>
                <Link to="/" className="navBar_link">
                  {t(`${nvBarHoteInfo}`)}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="toggle_parent" display={'flex'} alignItems={'center'}>
          <Box>
            {/* <NotificationsNoneOutlinedIcon /> */}
            <img src={bell} alt="" />
          </Box>
          <Box marginX={4}>
            <Typography color={'primary.main'}>Ruben</Typography>
          </Box>
          <Box>1</Box>
          <Box className="inner_toggleParent">
            <Accordion className="navbar_logOut">
              <AccordionSummary
                className="navbar_logOut"
                expandIcon={<ExpandMoreIcon color={'primary'} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={'body1'} color={'primary'}>
                  Viju Varma
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
