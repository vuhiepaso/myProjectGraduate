import { memo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
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
import { GetProducts } from '../../api/ProductAPI';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { ProductListHead, ProductListToolbar, ProductMoreMenu } from './sections';
import { getComparator, applySortFilter } from '../../utils/formatTable';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'product_name', label: 'Product Name', alignRight: false },
  { id: 'image', label: 'Product Image', alignRight: false },
  { id: 'category_name', label: 'Category Name', alignRight: false },
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
  { id: 'sale_off', label: 'Sale off', alignRight: false },
  { id: '', label: 'Color', alignRight: false },
  { id: '', label: 'Size', alignRight: false },
  { id: '' }
];

function Product() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('category_name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: products, isLoading } = GetProducts();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = (products?.data || []).map((n) => n.product_id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (products?.data || []).length) : 0;

  const filteredUsers = applySortFilter(
    products?.data || [],
    getComparator(order, orderBy),
    filterName,
    'product_name'
  );

  if (isLoading) return 'Loading...';
  return (
    <Page title="Category | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Product
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Product
          </Button>
        </Stack>

        <Card>
          <ProductListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ProductListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={(products?.data || []).length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = selected.indexOf(row.product_name) !== -1;
                      return (
                        <TableRow
                          hover
                          key={index}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, row.product_id)}
                            />
                          </TableCell>
                          <TableCell align="left">{row.product_name}</TableCell>
                          <TableCell align="center">
                            <Avatar alt={row.image} src={row.image} />
                          </TableCell>
                          <TableCell align="left">{row.category_name}</TableCell>
                          <TableCell align="left">{row.description}</TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                          <TableCell align="left">{row.sale_off}%</TableCell>

                          <TableCell align="left">
                            {row.color_table.map((color, colorIndex) => (
                              <Typography key={colorIndex} sx={{ color: color.color }}>
                                {color.color}
                              </Typography>
                            ))}
                          </TableCell>
                          <TableCell align="left">
                            {row.color_table.map((color) =>
                              color.size_table.map((size) => `${size.size} `)
                            )}
                          </TableCell>

                          <TableCell align="left">
                            <Typography
                              sx={{ backgroundColor: row.background_color, width: 'fit-content' }}
                            >
                              {row.background_color}
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <Typography sx={{ color: row.text_color }}>{row.text_color}</Typography>
                          </TableCell>
                          <TableCell align="left">
                            <Stack direction="row" spacing={1}>
                              {row.product_created_at && (
                                <Label variant="ghost" color="success">
                                  Created
                                </Label>
                              )}
                              {row.product_updated_at && (
                                <Label variant="ghost" color="warning">
                                  Updated
                                </Label>
                              )}
                              {row.product_deleted_at && (
                                <Label variant="ghost" color="error">
                                  Deleted
                                </Label>
                              )}
                            </Stack>
                          </TableCell>
                          <TableCell align="right">
                            <ProductMoreMenu />
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
            count={(products?.data || []).length}
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

export default memo(Product);
