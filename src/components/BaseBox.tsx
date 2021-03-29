import React from 'react';
import styled from 'styled-components';

const BoxRoot = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const BaseBox: React.FC = props => (
	<BoxRoot>
		{ props.children }
	</BoxRoot>
);
