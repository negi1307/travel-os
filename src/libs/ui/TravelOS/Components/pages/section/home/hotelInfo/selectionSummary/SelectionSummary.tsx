import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
  return (
    <>
      <SidebarAccordion>
        <SidebarAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Selection Summary</Typography>
        </SidebarAccordionSummary>
        <SidebarAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </SidebarAccordionDetails>
      </SidebarAccordion>
      {/* Horizontal Line */}
      <HorizontalLine />
      {/* Hotel Name */}
      <Typography variant="subtitle1">HOTEL</Typography>
      <Typography variant="subtitle2"> Atlantis the Palm</Typography>
      {/* Horizontal Line */}
      <HorizontalLine />
      {/* Rooms */}
      <Typography variant="subtitle2">1 Room(s) 2-Guest(s)</Typography>
      {/* Horizontal Line */}
      <HorizontalLine />
      {/* Nights */}
      <Typography variant="subtitle2">2-Nights</Typography>
    </>
  );
};

export default SelectionSummary;
