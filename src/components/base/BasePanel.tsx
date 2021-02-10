import React, { useState } from 'react';
import styled from 'styled-components';

import { LogoutButton, BaseButton } from '../buttons';

interface PanelRootProps {
	open: boolean;
}

const PanelRoot = styled.aside<PanelRootProps>`
	width: 420px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	z-index: 5;
	transition: 1s left;
	
	@media (max-width: 1024px) {
		position: absolute;
		left: ${ (props: any) => props.open ? '0' : '-420px' };
	}
`;

const PanelClose = styled(BaseButton)`
	display: none;
	
	@media (max-width: 1024px) {
		display: block;
		width: 50px;
		height: 50px;
		background-color: inherit;
		position: absolute;
		left: 420px;
		top: 10px;
		border-radius: 0 3px 3px 0;
	}
`;

const PanelHead = styled.div`
	width: 100%;
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

export const BasePanel: React.FC = props => {
	const [open, setOpen] = useState(false);

	return (
		<PanelRoot open={ open }>
			<PanelClose
				children='x'
				onClick={ () => setOpen(!open) }
			/>
			<PanelHead>
				<LogoutButton>Logout</LogoutButton>
			</PanelHead>
			<PanelContent>
				{ props.children }
			</PanelContent>
		</PanelRoot>
	);
};
