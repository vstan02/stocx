import React from 'react';

import { PrivatePage } from '../components/pages';
import { BasePanel, BaseBox } from '../components/base';
import { StocksChart } from '../components/charts';
import { SymbolList } from '../components/symbols';

const Home: React.FC = () => (
	<PrivatePage title='Stox | A simple stock price web app'>
		<BaseBox>
			<BasePanel>
				<SymbolList />
			</BasePanel>
			<StocksChart />
		</BaseBox>
	</PrivatePage>
);

export default Home;
