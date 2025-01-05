import { createContext } from 'react';
import { AuthContextType } from '../types/context/AuthContextType';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
