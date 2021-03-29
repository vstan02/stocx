import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

import '../styles/globals.scss';

interface AppProps {
	Component: any;
	pageProps: any;
}

const App: React.FC<AppProps> = props => {
	const { Component, pageProps } = props;

	return (
		<ThemeProvider theme={ theme }>
			<Component { ...pageProps } />
		</ThemeProvider>
	);
};

export default App;
