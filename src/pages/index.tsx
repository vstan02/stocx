import React from 'react';

import { PrivatePage } from '../components/pages';
import { BasePanel } from '../components/base';

const Home: React.FC = () => (
	<PrivatePage title='Stox | A simple stock price web app'>
		<BasePanel />
	</PrivatePage>
);

export default Home;
