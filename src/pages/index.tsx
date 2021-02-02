import React from 'react';

import { PrivatePage } from '../components/pages';
import { BasePanel, BaseChart, BaseBox } from '../components/base';

const Home: React.FC = () => (
	<PrivatePage title='Stox | A simple stock price web app'>
		<BaseBox>
			<BasePanel />
			<BaseChart />
		</BaseBox>
	</PrivatePage>
);

export default Home;
