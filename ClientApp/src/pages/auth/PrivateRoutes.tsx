import {Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks';
import { selectLoginState } from './authSlice';
import { isTokenExpired } from '../../utils/tokenUtil';

export const PrivateRoutes = () => {
  const state = useAppSelector(selectLoginState);
  const location = useLocation();
  if (!state.token || isTokenExpired(state.token)) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />
}