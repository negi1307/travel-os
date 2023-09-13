import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box, Grid, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './dummydata';
import './Destination.css';

import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const Destination: React.FC = () => {
  const getAcc = (e: any) => {
    console.log(e, 'ccca');
  };
  const [accordionSelec, setAccordionSelec] = useState('');
  console.log(accordionSelec, 'll');
  return (
    <div>
      {/* <FormControl fullWidth>
        <InputLabel>Destination</InputLabel>

        <Select value={accordionSelec} id="grouped-select" label="Grouping">
          {DummyData?.map((item) => {
            const secondType = item?.secondType;
            return (
              <>
                <ListSubheader>{item?.firstType}</ListSubheader>
                {secondType?.map((items) => {
                  return (
                    <>
                      <MenuItem
                        value={accordionSelec}
                        onClick={() => {
                          setAccordionSelec(items.typeName);
                        }}
                      >
                        {items.typeName}
                      </MenuItem>
                    </>
                  );
                })}
              </>
            );
          })}
        </Select>
      </FormControl> */}
      <Accordion
        sx={{
          backgroundColor: '#252525',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>Destination</Typography>
          </Box>
        </AccordionSummary>
        {DummyData?.map((item) => {
          const secondType = item?.secondType;
          return (
            <>
              <AccordionDetails>
                <Accordion
                  sx={{
                    backgroundColor: '#252525',
                  }}
                  onChange={() => {
                    getAcc(item.firstType);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="point_cursor"
                  >
                    <Typography color={'primary'}>{item.firstType}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {secondType?.map((items) => {
                      return (
                        <>
                          <Box>
                            <Typography
                              color={'primary'}
                              className="point_cursor"
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
              </AccordionDetails>
            </>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Destination;
