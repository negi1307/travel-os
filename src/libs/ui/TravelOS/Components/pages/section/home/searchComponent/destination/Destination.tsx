import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Grid, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './dummydata';
import './Destination.css';

const Destination: React.FC = (props: any) => {
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
          backgroundColor: '#252525',
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(true)}
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>
              {destinationData !== '' ? (
                <>
                  <Typography
                    className="destination_select"
                    variant="h6"
                    marginLeft={3}
                    sx={{ color: 'wheat' }}
                  >
                    Destination
                  </Typography>
                  <Typography
                    marginTop={2}
                    marginBottom={2}
                    color={'warning.main'}
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
                    sx={{ color: 'wheat' }}
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
          <Typography
            color={'secondary.main'}
            paddingX={2}
            paddingY={1}
            marginY={5}
            variant={'button'}
          >
            MIDDLE EAST
          </Typography>
          {DummyData?.map((item) => {
            const secondType = item?.secondType;
            return (
              <>
                <Accordion
                  expanded={true}
                  sx={{
                    backgroundColor: '#252525',
                  }}
                  onChange={() => {
                    getAcc(item.firstType);
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Typography color={'secondary.main'} variant={'button'}>
                        Select All
                      </Typography>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="point_cursor"
                  >
                    <Typography color={'secondary.main'} variant={'button'}>
                      {item.firstType}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {secondType?.map((items) => {
                      return (
                        <>
                          <Box>
                            <Typography
                              color={'secondary.main'}
                              className="point_cursor"
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
