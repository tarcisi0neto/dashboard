import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TransactionsModel } from '../../Models/Transaction';
import { environment } from '../../environments/environments';
import { useFecth } from '../../hooks/useFecth';
import { format } from 'date-fns';
import Badge from 'react-bootstrap/Badge';

import styles from '../TableTransaction/TableTransaction.module.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#6B7280',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
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
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));


export function TableTransaction() {
  
  const { data: transactions, isFetching, error } = useFecth<TransactionsModel[]>(`${environment.url}/transactions`)

  function handleCompleteTransaction(transaction:TransactionsModel){
    if(transaction.completed){
      return (
        <div>
          <Badge className={styles.badgesSuccess} pill bg="success">Completed</Badge>{' '}
        </div>
      )
    }else {
      return (
        <div>
          <Badge className={styles.badgesCancelled} pill bg="danger">Cancelled</Badge>{' '}
        </div>
      )
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>TRANSACTION</StyledTableCell>
            <StyledTableCell align="center">DATE & TIME</StyledTableCell>
            <StyledTableCell align="center">AMOUNT</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching && <p>Carregando...</p>}
          {transactions?.map((transaction) => {
            let date = new Date(transaction.createdAt);
            const formatDate = format(date, "MMM , d, yyyy");
            return (
              <StyledTableRow key={transaction.id}>
                <StyledTableCell component="th" scope="row" style={{color:'var(--gray-900)', fontWeight:700}}>{transaction.firstName} {transaction.lastName}</StyledTableCell>
                <StyledTableCell align="center" style={{color:'var(--gray-500)'}}>{formatDate}</StyledTableCell>
                <StyledTableCell align="center" style={{color:'var(--gray-900)', fontWeight:700 }}>${transaction.amount}</StyledTableCell>
                <StyledTableCell align="center"> 
                  {handleCompleteTransaction(transaction)}
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 