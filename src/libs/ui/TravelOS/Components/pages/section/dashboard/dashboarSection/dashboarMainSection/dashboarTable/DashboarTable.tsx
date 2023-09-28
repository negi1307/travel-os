import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCard from '../tableCard/TableCard';
import { Button } from '@mui/base';
import './DashboarTable.css';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string
  // protein: number,
  // price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    // protein,
    // price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

const Row = (props: { row: ReturnType<typeof createData>; meneItme: any }) => {
  const { row, meneItme } = props;
  const [open, setOpen] = React.useState(false);
  const { mainTable_plus, mainTable_mainus } =
    meneItme[10]?.dashboardSearhImg?.[0];
  console.log(meneItme[10]?.dashboardSearhImg?.[0], '888');
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <Box display={'flex'}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <img src={mainTable_mainus} alt="" />
              ) : (
                <img src={mainTable_plus} alt="" />
              )}
            </IconButton>
            <Box marginLeft={3}>
              <Typography className="dashboartTable_font_style">
                AD_010320230307
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography className="dashboartTable_font_style">
            {row.name}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className="dashboartTable_font_style">
            {row.calories}
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography className="dashboartTable_font_style">
            {row.fat}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Button className="dashboardTable_btn_font_style">{row.carbs}</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <TableCard meneItme={meneItme} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

// export default DashboarTable;

const rows = [
  createData(
    'Dubai-Alexanider Atlantis',
    '11 Sep 2023',
    '20 sep 2023',
    'Booked'
    // 4.0,
    // 3.99
  ),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  // createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  // createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function DashboarTable(props: any) {
  const { meneItme } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" className="table_parent">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#C2DFFF' }}>
            <TableCell>Quotation ID</TableCell>
            <TableCell>Quotation Ref</TableCell>
            <TableCell align="center">Created on</TableCell>
            <TableCell align="center">Arrival Date</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} meneItme={meneItme} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
