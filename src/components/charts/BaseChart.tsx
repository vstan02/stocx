import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

const ChartRoot = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${ ({ theme }) => theme.color.BASE_BETA };
`;

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

export const BaseChart: React.FC = () => (
	<ChartRoot>
		<ResponsiveContainer>
			<AreaChart data={ data } margin={{ top: 50, bottom: 50, left: 50, right: 50 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis dataKey="name" stroke="#FFFFFF" />
				<YAxis stroke="#FFFFFF" />
				<Tooltip />
				<CartesianGrid stroke="#172331" strokeDasharray="5 5" />
				<Area type="monotone" dataKey="uv" stroke="#7bcbf0" fillOpacity={1} fill="#7bcbf047" />
			</AreaChart>
		</ResponsiveContainer>
	</ChartRoot>
);
