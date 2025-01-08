import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuthHook = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthHook must be used within an AuthProvider');
  }
  return context;
};