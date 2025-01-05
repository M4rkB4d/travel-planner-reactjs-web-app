export type AuthContextType = {
    user: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
};