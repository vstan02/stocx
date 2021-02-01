import React, { useContext } from 'react';

import { AuthContext } from '../../context';

import { BasePage } from './BasePage';
import { AuthPage } from './AuthPage';

interface PrivatePageProps {
	title: string;
}

export const PrivatePage: React.FC<PrivatePageProps> = props => {
	const { token } = useContext(AuthContext);

	if (!token) {
		return <AuthPage title={ props.title } />;
	}

	return (
		<BasePage title={ props.title }>
			{ props.children }
		</BasePage>
	);
};
