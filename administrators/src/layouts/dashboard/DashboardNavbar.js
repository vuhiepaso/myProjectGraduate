import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import AccountPopover from './AccountPopover';
// const
import { DRAWER_WIDTH, APP_BAR_MOBILE, APP_BAR_DESKTOP } from '../../constants';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APP_BAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APP_BAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
  onLogout: PropTypes.func,
  user: PropTypes.object
};

export default function DashboardNavbar({ isOpenSidebar, onOpenSidebar, onLogout, user }) {
  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        backgroundColor: alpha('#F9FAFB', 0.72),
        width: isOpenSidebar ? `calc(100% - ${DRAWER_WIDTH + 1}px)` : '100%'
      }}
    >
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <NotificationsPopover /> */}
          <AccountPopover user={user} onLogout={onLogout} />
        </Stack>
      </ToolbarStyle>
    </AppBar>
  );
}
