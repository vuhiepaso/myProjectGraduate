import { memo, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// call api
import { GetAddress } from '../../api/AddressAPI';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { AddressListHead, AddressListToolbar } from './sections';
import { getComparator, applySortFilter } from '../../utils/formatTable';
import { BillMoreMenu } from '../Bill/sections';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'user_phone', label: 'User phone', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false },
  { id: 'address_phone', label: 'Address phone', alignRight: false },
  { id: 'recipient_name', label: 'Recipient Name', alignRight: false },
  { id: 'is_default', label: 'Default', alignRight: false },
  { id: 'address_deleted_at', label: 'Status', alignRight: false },
  { id: '' }
];

function Address() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: addresses, isLoading } = GetAddress();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = (addresses?.data || []).map((n) => n.address_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (addresses?.data || []).length) : 0;

  const filteredUsers = applySortFilter(
    addresses?.data || [],
    getComparator(order, orderBy),
    filterName,
    'user_phone'
  );

  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzlhYmNiOGYtNmM4ZC00YzdjLWJkNDUtMDExY2M0MzA2ZWNlIiwicm9sZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDQtMDFUMTQ6MDc6NTIuMzk3WiIsImlhdCI6MTY0ODgyMjA3Mn0.oIUij4kjHa78Si_bXB-s2rg0zaih9TCL0ix0ak2ylrs'
    );
  });

  if (isLoading) return 'Loading...';
  return (
    <Page title="Category | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Address
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Address
          </Button>
        </Stack>

        <Card>
          <AddressListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <AddressListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={(addresses?.data || []).length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const isItemSelected = selected.indexOf(row.address_id) !== -1;
                      return (
                        <TableRow
                          hover
                          key={row.address_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, row.address_id)}
                            />
                          </TableCell>
                          <TableCell align="left">{row.user_phone}</TableCell>
                          <TableCell align="left">{row.address}</TableCell>
                          <TableCell align="left">{row.address_phone}</TableCell>
                          <TableCell align="left">{row.recipient_name}</TableCell>
                          <TableCell align="left">
                            {row.is_default === 1 && (
                              <Label variant="ghost" color="success">
                                Default
                              </Label>
                            )}
                          </TableCell>
                          <TableCell align="left">
                            <Stack direction="row" spacing={1}>
                              {row.address_created_at && (
                                <Label variant="ghost" color="success">
                                  Created
                                </Label>
                              )}
                              {row.address_updated_at && (
                                <Label variant="ghost" color="warning">
                                  Updated
                                </Label>
                              )}
                              {row.address_deleted_at && (
                                <Label variant="ghost" color="error">
                                  Deleted
                                </Label>
                              )}
                            </Stack>
                          </TableCell>
                          <TableCell align="right">
                            <BillMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {filteredUsers.length === 0 && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={(addresses?.data || []).length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}

export default memo(Address);
