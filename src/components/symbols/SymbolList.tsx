import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HttpMethod, useFinanceApi } from '../../hooks';

import { BaseSymbol } from './BaseSymbol';

interface SymbolListProps {
	search: string;
	onSelect(symbol: string): void;
}

const SEARCH_DELAY = 1000;

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

	const [timeoutID, setTimeoutID] = useState(0);
	const [firstRequest, setFirstRequest] = useState(true);
	const [symbol, setSymbol] = useState('');
	const [symbols, setSymbols] = useState<Array<any>>([]);

	const symbolFilter = (symbol: any) => symbol.country === 'United States';

	useEffect(() => {
		window.clearTimeout(timeoutID);
		const id = window.setTimeout(() => setSymbol(props.search), SEARCH_DELAY);
		setTimeoutID(id);
	}, [props.search]);

	useEffect(() => {
		request('/symbol_search', HttpMethod.GET, { symbol }).then((result: any) => {
			if (result) {
				const symbols = result.data.filter(symbolFilter);
				setSymbols(symbols);
				if (firstRequest && symbols[0]) {
					setFirstRequest(false);
					props.onSelect(symbols[0].symbol);
				}
			}
		});
	}, [symbol]);

	return (
		<ListRoot>
			{ symbols.map((item, index) => (
				<ListItem key={ index } onClick={ () => props.onSelect(item.symbol) }>
					<BaseSymbol target={ item } />
				</ListItem>
			)) }
		</ListRoot>
	);
};
