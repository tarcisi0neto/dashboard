import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#6B7280',
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  transaction: string,
  dataTime: string,
  amount: string,
  status: string,
) {
  return { transaction, dataTime, amount, status};
}

const rows = [
  createData('Payment from Bonnie Green', 'Apr 23 ,2021', '$2300', 'completed'),
  createData('Payment refund to #00910', 'Apr 23, 2021','-$670', 'completed'),
  createData('Payment failed from #087651', 'Apr 18, 2021', '$234', 'Cancelled'),
  createData('Payment from Jese Leos', 'Apr 15, 2021', '$2300', 'In progress'),
  createData('Payment from THEMSBERG LLC', 'Apr 11, 2021', '$280', 'completed'),
];

export function TableTransaction() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TRANSACTION</StyledTableCell>
            <StyledTableCell align="center">DATE & TIME</StyledTableCell>
            <StyledTableCell align="center">AMOUNT</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.transaction}>
              <StyledTableCell component="th" scope="row" style={{color:'var(--gray-900)', fontWeight:700 }}>{row.transaction}</StyledTableCell>
              <StyledTableCell align="center" style={{color:'var(--gray-500)'}}>{row.dataTime}</StyledTableCell>
              <StyledTableCell align="center" style={{color:'var(--gray-900)', fontWeight:700 }}>{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}