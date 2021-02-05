import { createContext } from 'react';

export const AuthContext = createContext({
	token: '',
	login(token: string) {},
	logout() {}
});

export const AuthProvider = AuthContext.Provider;
