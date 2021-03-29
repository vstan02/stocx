import React, { useState } from 'react';

import {
	BasePage,
	BasePanel,
	BaseBox,
	StocksChart,
	SearchInput,
	SymbolList
} from '../components';

const Home: React.FC = () => {
	const [search, setSearch] = useState('');
	const [symbol, setSymbol] = useState('');

	return (
		<BasePage title='Stocx | A simple stock price web app'>
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
		</BasePage>
	);
};

export default Home;
