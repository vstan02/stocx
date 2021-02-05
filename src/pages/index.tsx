import React, { useState } from 'react';

import { PrivatePage } from '../components/pages';
import { BasePanel, BaseBox } from '../components/base';
import { StocksChart } from '../components/charts';
import { SymbolList } from '../components/symbols';

const Home: React.FC = () => {
	const [symbol, setSymbol] = useState('');

	return (
		<PrivatePage title='Stox | A simple stock price web app'>
			<BaseBox>
				<BasePanel>
					<SymbolList onSelect={ (symbol: string) => setSymbol(symbol) } />
				</BasePanel>
				<StocksChart symbol={ symbol } />
			</BaseBox>
		</PrivatePage>
	);
};

export default Home;
