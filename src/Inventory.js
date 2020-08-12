import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import InventoryHead from './InventoryHead'



const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'item', label: 'Item', minWidth: 170 },
  {
    id: 'state',
    label: 'State',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'type',
    label: 'Type',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'use',
    label: 'Used By',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


function createData(id, item, state, type, use) {
    return { id, item, state, type, use };
}

const rows = [
  createData('CH01', 'Chair', 'Available', 'Wood', ''),
  createData('CH02', 'Chair', 'Available', 'Wood', ''),
  createData('CH03', 'Chair', 'In Use', 'Wood', 'User One'),
  createData('CH04', 'Chair', 'Available', 'Wood', ''),
  createData('CH05', 'Chair', 'Available', 'Metal', ''),
  createData('CH06', 'Chair', 'In Use', 'Wood', 'Tolulope Oladimeji'),
  createData('CH07', 'Chair', 'Available', 'Metal', ''),
  createData('CH08', 'Chair', 'In Use', 'Metal', 'Namjoon Kim'),
  createData('CH09', 'Chair', 'In Use', 'Metal', 'Seokjin Kim'),
  createData('CH10', 'Chair', 'Available', 'Wood', ''),
  createData('BD01', 'Bed', 'Available', 'Metal', ''),
  createData('BD02', 'Bed', 'In Use', 'Metal', 'Yoongi Min'),
  createData('BD03', 'Bed', 'Available', 'Wood', ''),
  createData('BD04', 'Bed', 'Available', 'Wood', ''),
  createData('BD05', 'Bed', 'In Use', 'Metal', 'Hoseok Jung'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 480,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <InventoryHead/>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
