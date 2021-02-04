import React from 'react';

import { PrivatePage } from '../components/pages';
import { BasePanel, BaseBox } from '../components/base';
import { StocksChart } from '../components/charts';

const Home: React.FC = () => (
	<PrivatePage title='Stox | A simple stock price web app'>
		<BaseBox>
			<BasePanel>
				//
			</BasePanel>
			<StocksChart />
		</BaseBox>
	</PrivatePage>
);

export default Home;
