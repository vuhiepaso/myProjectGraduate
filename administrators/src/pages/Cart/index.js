import { memo, useState } from 'react';
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
import { GetCarts } from '../../api/CartApi';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { CartListHead, CartListToolbar, CartMoreMenu } from './sections';
import { getComparator, applySortFilter } from '../../utils/formatTable';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'phone', label: 'Phone Number', alignRight: false },
  { id: 'product_name', label: 'Product Name', alignRight: false },
  { id: 'color', label: 'Color', alignRight: false },
  { id: 'size', label: 'Size', alignRight: false },
  { id: 'import_quantity', label: 'Import Quantity', alignRight: false },
  { id: 'sold_quantity', label: 'Sold Quantity', alignRight: false },
  { id: 'deleted_at', label: 'Status', alignRight: false },
  { id: '' }
];

function Cart() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: carts, isLoading } = GetCarts();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = (carts?.data || []).map((n) => n.cart_id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (carts?.data || []).length) : 0;

  const filteredUsers = applySortFilter(
    carts?.data || [],
    getComparator(order, orderBy),
    filterName,
    'phone'
  );

  if (isLoading) return 'Loading...';
  return (
    <Page title="Category | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Cart
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Cart
          </Button>
        </Stack>

        <Card>
          <CartListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <CartListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={(carts?.data || []).length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const isItemSelected = selected.indexOf(row.category_name) !== -1;
                      return (
                        <TableRow
                          hover
                          key={row.cart_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, row.cart_id)}
                            />
                          </TableCell>
                          <TableCell align="left">{row.phone}</TableCell>
                          <TableCell align="left">{row.product_name}</TableCell>
                          <TableCell align="left">
                            <Typography sx={{ backgroundColor: row.color, width: 'fit-content' }}>
                              {row.color}
                            </Typography>
                          </TableCell>
                          <TableCell align="left">{row.size}</TableCell>
                          <TableCell align="left">{row.import_quantity}</TableCell>
                          <TableCell align="left">{row.sold_quantity}</TableCell>
                          <TableCell align="left">
                            <Stack direction="row" spacing={1}>
                              {row.created_at && (
                                <Label variant="ghost" color="success">
                                  Created
                                </Label>
                              )}
                              {row.updated_at && (
                                <Label variant="ghost" color="warning">
                                  Updated
                                </Label>
                              )}
                              {row.deleted_at && (
                                <Label variant="ghost" color="error">
                                  Deleted
                                </Label>
                              )}
                            </Stack>
                          </TableCell>
                          <TableCell align="left">
                            <CartMoreMenu />
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
            count={(carts?.data || []).length}
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

export default memo(Cart);
