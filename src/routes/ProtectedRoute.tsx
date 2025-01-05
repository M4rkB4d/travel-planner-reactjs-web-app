import { Navigate, Outlet } from 'react-router-dom';
import { useAuthHook } from '../hooks/useAuthHook';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthHook();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;