import React from 'react';
import styled from 'styled-components';

import { AuthForm } from '../forms';

import { BasePage } from './BasePage';

interface AuthPageProps {
	title: string;
}

const PageBox = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: url("${ ({ theme }) => theme.image.BOX_BG }");
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AuthPage: React.FC<AuthPageProps> = props => (
	<BasePage title={ props.title }>
		<PageBox>
			<AuthForm />
		</PageBox>
	</BasePage>
);
