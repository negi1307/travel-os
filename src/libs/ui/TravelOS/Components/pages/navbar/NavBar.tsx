import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
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
  const jumeirahLogo = meneItme?.[0]?.logo;
  const location = useLocation();
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const user = store?.Auth?.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <Box
        display={'flex'}
        padding={3}
        justifyContent={'space-between'}
        className="navbar_backGroud_clr"
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box marginX={4}>
            <img src={jumeirahLogo} alt="" width={'125px'} />
          </Box>
          <Box
            className={
              location?.pathname === '/dashboard/home' ? 'navbarLinks' : ''
            }
            display={'flex'}
          >
            <Box>
              <HomeIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/dashboard/home" className="navBar_link">
                Home
              </Link>
            </Box>
          </Box>
          <Box
            marginX={4}
            className={
              location?.pathname === '/dashboard/dashboards'
                ? 'navbarLinks'
                : ''
            }
            display={'flex'}
          >
            <Box>
              <SpeedIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/dashboard/dashboards" className="navBar_link">
                Dashboard
              </Link>
            </Box>
          </Box>
          <Box display={'flex'}>
            <Box>
              <InsightsIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/" className="navBar_link">
                Insights
              </Link>
            </Box>
          </Box>
          <Box marginX={4} display={'flex'}>
            <Box>
              <PeopleAltIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/" className="navBar_link">
                Business Admin
              </Link>
            </Box>
          </Box>
          <Box display={'flex'}>
            <Box>
              <PermIdentityIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/" className="navBar_link">
                My Account
              </Link>
            </Box>
          </Box>
          <Box marginX={4} display={'flex'}>
            <Box>
              <HelpIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/" className="navBar_link">
                FAQs
              </Link>
            </Box>
          </Box>
          <Box display={'flex'}>
            <Box>
              <BusinessOutlinedIcon className="iconsNavbar" />
            </Box>
            <Box>
              <Link to="/" className="navBar_link">
                Hotel Info
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="toggle_parent" display={'flex'} alignItems={'center'}>
          <Box>
            <NotificationsNoneOutlinedIcon />
          </Box>
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
