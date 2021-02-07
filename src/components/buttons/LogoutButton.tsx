import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from '../../context';

import { BaseButton } from './BaseButton';

export const ButtonRoot = styled(BaseButton)`
	width: 80%;
	color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	transition: 0.3s background-color;
	border-radius: 1px;
	
	&:hover {
		background-color: ${ ({ theme }) => theme.color.PRIMARY_BETA };
	}
`;

export const LogoutButton: React.FC = props => {
	const { logout } = useContext(AuthContext);

	return (
		<ButtonRoot onClick={ logout }>
			{ props.children }
		</ButtonRoot>
	);
};
