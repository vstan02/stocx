import React from 'react';
import styled from 'styled-components';

import { LogoutButton } from '../buttons';

const PanelRoot = styled.aside`
	width: 420px;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
`;

const PanelConfig = styled.div`
	width: 80%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${ ({ theme }) => theme.color.CONTRAST_ALPHA };
	border-bottom: 1px solid ${ ({ theme }) => theme.color.BASE_BETA };
`;

export const BasePanel: React.FC = () => (
	<PanelRoot>
		<PanelConfig>
			<LogoutButton>Logout</LogoutButton>
		</PanelConfig>
	</PanelRoot>
);
