import { createContext } from 'react';
import { AuthContextInterface } from './interfaces/AuthContextInterface';

export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);