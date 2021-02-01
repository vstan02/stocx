import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useAuth } from '../hooks';
import { AuthContext } from '../context';
import theme from '../theme';

import '../styles/globals.scss';

interface AppProps {
	Component: any;
	pageProps: any;
}

const App: React.FC<AppProps> = props => {
	const { Component, pageProps } = props;
	const { token, login, logout } = useAuth();

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			<ThemeProvider theme={ theme }>
				<Component { ...pageProps } />
			</ThemeProvider>
		</AuthContext.Provider>
	);
};

export default App;
