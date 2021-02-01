import { useCallback, useEffect, useState } from 'react';

interface AuthHook {
	token: string;
	login(token: string): void;
	logout(): void;
}

const tokenStorage = 'token';

export const useAuth = (): AuthHook => {
	const [token, setToken] = useState('');

	const login = useCallback((jwtToken) => {
		setToken(jwtToken);
		sessionStorage.setItem(tokenStorage, jwtToken);
	}, []);

	const logout = useCallback(() => {
		setToken('');
		sessionStorage.removeItem(tokenStorage);
	}, []);

	useEffect(() => {
		const token = sessionStorage.getItem(tokenStorage);
		token && login(token);
	}, [login]);

	return { token, login, logout };
};
