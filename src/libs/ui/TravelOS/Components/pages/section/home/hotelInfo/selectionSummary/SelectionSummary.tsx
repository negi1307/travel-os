import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const SidebarAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none', // Remove border
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const SidebarAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const SidebarAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HorizontalLine = styled('hr')({
  border: 0,
  borderTop: '1px solid #ccc', // Add horizontal line styling
  margin: '16px 0', // Adjust margin as needed
});

const SelectionSummary = () => {
  const hoteData = [
    { item: 'HOTEL', items: 'ATANTIS, THE PALM' },
    { item: '1 ROOM(S) - 2 GUEST(S)', items: '' },
    { item: '2 NIGHT', items: '20 SEP-22 SEP 2023' },
    {
      item: 'OCEAN QUEEN ROOM',
      items: 'BIRTHDAY SALE - ADVANCE PURCHASE OFFER',
    },
    {
      item: 'TOTAL ROOM COST EXCLUDING TAXES & FEES',
      items: 'AED 2.202',
    },
    {
      item: 'APPLICABLE TAXES & FEES',
      items: 'AED 2.202',
      itemss:
        'Room rote is subject to 10% Service Charge 7% Municipality Free, and 5% Vat',
    },
  ];

  return (
    <>
      <Box p={3}>
        <Box>
          <Typography>SAVE FOR LATER</Typography>
        </Box>
        <Box display={'flex'} borderBottom={1}>
          <Box mr={2}>1</Box>

          <Typography>Selection Summary</Typography>
        </Box>
        {hoteData?.map((item) => {
          return (
            <>
              <Box borderBottom={1} mt={3}>
                <Typography variant="subtitle1">{item.item}</Typography>
                <Typography my={2} variant="subtitle1">
                  {item.items}
                </Typography>
                <Typography mt={2} mb={3} variant="subtitle1">
                  {item.itemss}
                </Typography>
              </Box>
            </>
          );
        })}
        <Box mt={3}>
          <Typography variant="subtitle1">
            TOTAL ROOM COST FOR 2 NIGHTS
          </Typography>
          <Typography mt={2} mb={3} variant="h2">
            AED 5.425
          </Typography>
        </Box>
        <Box mt={5}>
          <Button variant="contained" color="primary" fullWidth>
            CONTINUE TO CHECK OUT
          </Button>
        </Box>
        {/* <Box borderBottom={1} mt={3}>
          <Typography variant="subtitle1">HOTEL</Typography>
          <Typography mt={2} mb={3} variant="subtitle1">
            ATLANTIS, THE PALM
          </Typography>
        </Box>
        <Box borderBottom={1} mt={3}>
          <Typography variant="subtitle1">HOTEL</Typography>
          <Typography mt={2} mb={3} variant="subtitle1">
            ATLANTIS, THE PALM
          </Typography>
        </Box>
        <Box borderBottom={1} mt={3}>
          <Typography variant="subtitle1">HOTEL</Typography>
          <Typography mt={2} mb={3} variant="subtitle1">
            ATLANTIS, THE PALM
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default SelectionSummary;
