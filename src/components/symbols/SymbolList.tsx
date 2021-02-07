import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HttpMethod, useFinanceApi } from '../../hooks';

import { BaseSymbol } from './BaseSymbol';

interface SymbolListProps {
	search: string;
	onSelect(symbol: string): void;
}

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

export const SymbolList: React.FC<SymbolListProps> = props => {
	const { request } = useFinanceApi();
	const [symbols, setSymbols] = useState<Array<any>>([]);

	useEffect(() => {
		const params = { symbol: props.search };
		request('/symbol_search', HttpMethod.GET, params).then((result: any) => {
			const symbols = result.data.filter((symbol: any) => symbol.country === 'United States');
			setSymbols(symbols);
			if (symbols[0]) {
				props.onSelect(symbols[0].symbol);
			}
		});
	}, [props.search]);

	return (
		<ListRoot>
			{ symbols.map((item, index) => (
				// Not best key, but a better key field doesn't exists in the symbol object
				<ListItem key={ index } onClick={ () => props.onSelect(item.symbol) }>
					<BaseSymbol target={ item } />
				</ListItem>
			)) }
		</ListRoot>
	);
};
