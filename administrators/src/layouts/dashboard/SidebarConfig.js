// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'address',
    path: '/dashboard/address',
    icon: getIcon('carbon:location-filled')
  },
  {
    title: 'bill',
    path: '/dashboard/bill',
    icon: getIcon('fluent:receipt-money-20-filled')
  },
  {
    title: 'cart',
    path: '/dashboard/cart',
    icon: getIcon('eva:shopping-cart-fill')
  },
  {
    title: 'category',
    path: '/dashboard/category',
    icon: getIcon('eva:grid-fill')
  },
  {
    title: 'history',
    path: '/dashboard/history',
    icon: getIcon('ic:baseline-work-history')
  },
  {
    title: 'product',
    path: '/dashboard/product',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'contact',
    path: '/dashboard/contact',
    icon: getIcon('eva:message-square-fill')
  }
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill')
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill')
  // }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
