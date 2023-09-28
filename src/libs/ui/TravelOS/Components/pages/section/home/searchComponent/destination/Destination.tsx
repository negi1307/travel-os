import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Grid, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './dummydata';
import './Destination.css';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
}

const Destination = (props: MyComponentProps) => {
  const { meneItme } = props;
  const dropIcon = meneItme?.[6];
  const [expanded, setExpanded] = useState(false);

  const [destinationData, setDestinationData] = useState('');

  const getAcc = (e: any) => {
    setExpanded(false);
    setDestinationData(e);
  };

  return (
    <div className="destination_selectorBox">
      <Accordion
        expanded={expanded}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(!expanded)}
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ display: 'flex', alignItems: 'baseline' }}
        >
          <Box pl={2}>
            <Typography color={'primary'}>
              {destinationData !== '' ? (
                <>
                  <Typography
                    // className="destination_select"
                    color={'primary.light'}
                    variant="h6"
                    marginLeft={3}
                    // sx={{ color: 'wheat' }}
                  >
                    Destination
                  </Typography>
                  <Typography
                    marginTop={2}
                    marginBottom={2}
                    color={'primary.main'}
                    className="destination_select"
                    marginLeft={3}
                  >
                    {destinationData}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    paddingY={1}
                    color={'primary.light'}
                    className="destination_select_first"
                    marginLeft={3}
                  >
                    Destination
                  </Typography>
                </>
              )}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography
            color={'secondary.main'}
            paddingX={2}
            paddingY={1}
            marginY={5}
            variant={'button'}
          >
            MIDDLE EAST
          </Typography> */}
          {DummyData?.map((item) => {
            const secondType = item?.secondType;
            return (
              <>
                <Accordion
                  expanded={true}
                  sx={{
                    backgroundColor: 'white',
                  }}
                  onChange={() => {
                    getAcc(item.firstType);
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Typography color={'primary.light'} variant={'subtitle1'}>
                        Select All
                      </Typography>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="destination_hding_css"
                  >
                    <Typography color={'primary.light'} variant={'subtitle1'}>
                      {item.firstType}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {secondType?.map((items) => {
                      return (
                        <>
                          <Box>
                            <Typography
                              color={'primary.contrastText'}
                              className="destination_type_css"
                              marginY={2}
                              paddingX={2}
                              variant={'subtitle1'}
                              onClick={() => {
                                getAcc(items.typeName);
                              }}
                            >
                              {items.typeName}
                            </Typography>
                          </Box>
                        </>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Destination;
