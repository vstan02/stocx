import React, { useState } from 'react';
import styled from 'styled-components';

import { BaseButton } from './BaseButton';

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
	
	@media (max-width: ${ ({ theme }) => theme.bkp.ALPHA }) {
		position: absolute;
		left: ${ (props: any) => props.open ? '0' : '-420px' };
	}

	@media (max-width: ${ ({ theme }) => theme.bkp.DELTA }) {
		width: 260px;
		left: ${ (props: any) => props.open ? '0' : '-260px' };
	}
`;

const PanelClose = styled(BaseButton)`
	display: none;
	
	@media (max-width: ${ ({ theme }) => theme.bkp.ALPHA }) {
		display: block;
		width: 40px;
		height: 40px;
		background-color: inherit;
		position: absolute;
		left: 420px;
		top: 20px;
		border-radius: 0 3px 3px 0;
	}

	@media (max-width: ${ ({ theme }) => theme.bkp.DELTA }) {
		left: 260px;
	}
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
			<PanelContent>
				{ props.children }
			</PanelContent>
		</PanelRoot>
	);
};
