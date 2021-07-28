import React from 'react';
import {
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import useStyles from '../Styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IEmailRows, IEmailRow } from './IProps';

export default (props: IEmailRows): React.ReactElement => {
  const classes = useStyles();
  const { rows } = props;

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Tentativa</TableCell>
            <TableCell align="right">Confirmação</TableCell>
            <TableCell align="right">Quando</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: IEmailRow): React.ReactNode => (
            <TableRow key={row.Id}>
              <TableCell component="th" scope="row">
                {row.Email}
              </TableCell>
              <TableCell align="right">{(row.SendGridKey === '') ? '' : (row.Dequeue?.toString() || '')}</TableCell>
              <TableCell align="right">{row.SendGridKey}</TableCell>
              <TableCell align="right">{(row.SendGridKey === '') ? '' : row.When}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
