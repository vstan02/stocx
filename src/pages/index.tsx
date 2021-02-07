import React, { useState } from 'react';

import { BasePanel, BaseBox } from '../components/base';
import { PrivatePage } from '../components/pages';
import { StocksChart } from '../components/charts';
import { SymbolList } from '../components/symbols';
import { SearchInput } from '../components/inputs';

const Home: React.FC = () => {
	const [search, setSearch] = useState('');
	const [symbol, setSymbol] = useState('');

	return (
		<PrivatePage title='Stox | A simple stock price web app'>
			<BaseBox>
				<BasePanel>
					<SearchInput
						placeholder="Search symbol"
						value={ search }
						onChange={ (value) => { setSearch(value) } }
					/>
					<SymbolList
						search={ search }
						onSelect={ (symbol: string) => setSymbol(symbol) }
					/>
				</BasePanel>
				<StocksChart symbol={ symbol } />
			</BaseBox>
		</PrivatePage>
	);
};

export default Home;
