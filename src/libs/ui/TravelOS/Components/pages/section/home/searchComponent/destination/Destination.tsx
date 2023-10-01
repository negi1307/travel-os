import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Grid, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './dummydata';

interface MyComponentProps {
  meneItme: any; // Declare the prop here
  selectClose: string;
  mainConnentEmpty: any;
  mainConnentFill: any;
}

const Destination = (props: MyComponentProps) => {
  const { meneItme, selectClose, mainConnentEmpty, mainConnentFill } = props;
  const dropIcon = meneItme?.[6];
  const [expanded, setExpanded] = useState(false);
  const closeexpanded = () => {
    setExpanded(false);
    mainConnentEmpty();
  };

  const [destinationData, setDestinationData] = useState('');

  const getAcc = (e: any) => {
    setExpanded(false);
    setDestinationData(e);
  };

  const openDestination = () => {
    setExpanded(!expanded);
    mainConnentFill('dest');
  };

  useEffect(() => {
    if (selectClose === 'stay' || selectClose === 'guest') {
      closeexpanded();
    }
  }, [selectClose]);
  return (
    <div className="destination_selectorBox">
      <Accordion
        expanded={expanded}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <AccordionSummary
          onClick={() => openDestination()}
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="destination_main_box_media"
          sx={{ display: 'flex', alignItems: 'baseline' }}
        >
          <Box pl={2}>
            <Typography color={'primary'}>
              {destinationData !== '' ? (
                <>
                  <Typography
                    color={'primary.light'}
                    variant="h6"
                    className="destination_main_box_media"
                  >
                    Destination
                  </Typography>
                  <Typography
                    marginTop={2}
                    marginBottom={2}
                    color={'primary.main'}
                    className="destination_select "
                  >
                    {destinationData}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    paddingY={1}
                    color={'primary.light'}
                    className="destination_select_first "
                  >
                    Destination
                  </Typography>
                </>
              )}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className="media_quari_box_style ">
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
                      <Typography className="destination_selectHder_fontStyle">
                        Select All
                      </Typography>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="destination_hding_css"
                  >
                    <Typography className="destination_selectHder_fontStyle">
                      {item.firstType}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {secondType?.map((items) => {
                      return (
                        <>
                          <Box>
                            <Typography
                              className="destination_type_css"
                              marginY={2}
                              paddingX={2}
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
