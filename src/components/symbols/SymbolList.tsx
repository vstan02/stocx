import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HttpMethod, useFinanceApi } from '../../hooks';

import { BaseSymbol } from './BaseSymbol';

const ListRoot = styled.ul`
	width: 100%;
	height: 100%;
	list-style: none;
	padding: 0;
	overflow-y: scroll;
`;

const ListItem = styled.li`
	width: 100%;
	height: 70px;
	color: ${ ({ theme }) => theme.color.CONTRAST_ALPHA };
	transition: .5s background-color;
	cursor: pointer;
	
	&:hover {
		background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	}
`;

export const SymbolList: React.FC = () => {
	const { request } = useFinanceApi();
	const [symbols, setSymbols] = useState([]);

	// @ts-ignore
	useEffect(async () => {
		const params = { outputsize: '20' };
		const result = await request('/symbol_search', HttpMethod.GET, params);
		setSymbols(result.data);
		console.log(result);
	}, []);

	return (
		<ListRoot>
			{ symbols.map((item, index) => (
				// Not best key, but a better key field doesn't exists in the symbol object
				<ListItem key={ index }>
					<BaseSymbol target={ item } />
				</ListItem>
			)) }
		</ListRoot>
	);
};
