export interface AuthContextInterface {
    user: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
};