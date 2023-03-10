import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorIsLogin } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = () => {
  const login = useSelector(selectorIsLogin);
  if (!login) {
    return <Outlet />;
  }
  return <Navigate to="/products" />;
};
