import React from 'react';
import styled from 'styled-components';

import { BaseChart } from './BaseChart';

const ChartRoot = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${ ({ theme }) => theme.color.BASE_BETA };
`;

const ChartConfig = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 60px;
`;

const ChartContent = styled.div`
	width: calc(100% - 100px);
	height: calc(100% - 70px);
`;

export const StocksChart: React.FC = () => {
	const data = [
		{name: 'Page A', uv: 300, pv: 2400, amt: 2400},
		{name: 'Page B', uv: 500, pv: 2000, amt: 2400},
		{name: 'Page C', uv: 200, pv: 400, amt: 2400},
		{name: 'Page D', uv: 350, pv: 1400, amt: 2400},
		{name: 'Page E', uv: 320, pv: 1400, amt: 2400},
		{name: 'Page F', uv: 300, pv: 1400, amt: 2400},
		{name: 'Page G', uv: 250, pv: 1400, amt: 2400},
		{name: 'Page H', uv: 280, pv: 1400, amt: 2400},
	];

	return (
		<ChartRoot>
			<ChartConfig>
				<h1>Config me!</h1>
			</ChartConfig>
			<ChartContent>
				<BaseChart data={ data } key="name" value="pv" />
			</ChartContent>
		</ChartRoot>
	);
};
