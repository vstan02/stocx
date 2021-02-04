import React from 'react';
import styled from 'styled-components';

import { LogoutButton } from '../buttons';

const PanelRoot = styled.aside`
	width: 420px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
`;

const PanelHead = styled.div`
	width: 80%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${ ({ theme }) => theme.color.CONTRAST_ALPHA };
	border-bottom: 1px solid ${ ({ theme }) => theme.color.BASE_BETA };
`;

const PanelContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const BasePanel: React.FC = props => (
	<PanelRoot>
		<PanelHead>
			<LogoutButton>Logout</LogoutButton>
		</PanelHead>
		<PanelContent>
			{ props.children }
		</PanelContent>
	</PanelRoot>
);
