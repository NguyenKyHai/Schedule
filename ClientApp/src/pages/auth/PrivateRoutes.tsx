import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks';
import { selectLoginState } from './authSlice';
import { isTokenExpired } from '../../utils/tokenUtil';
import { toast } from 'react-toastify';

export const PrivateRoutes = () => {
  const authState = useAppSelector(selectLoginState);
  const location = useLocation();
  if (!authState.token) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (isTokenExpired(authState.token)) {
    toast.warning("Your session is expired! Please login again to continue.");
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />
}