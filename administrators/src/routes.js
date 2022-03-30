import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import Category from './pages/Category';
import NotFound from './pages/Page404';
import Address from './pages/Address';
import Bill from './pages/Bill';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import History from './pages/History';
import Product from './pages/Product';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'address', element: <Address /> },
        { path: 'bill', element: <Bill /> },
        { path: 'cart', element: <Cart /> },
        { path: 'category', element: <Category /> },
        { path: 'favorite', element: <Favorite /> },
        { path: 'history', element: <History /> },
        { path: 'product', element: <Product /> },
        { path: 'user', element: <User /> },
        //
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
