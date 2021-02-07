import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HttpMethod, useFinanceApi } from '../../hooks';

import { MenuButton } from '../buttons';

import { BaseChart } from './BaseChart';

interface StocksChartProps {
	symbol: string;
}

const ChartRoot = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${ ({ theme }) => theme.color.BASE_BETA };
`;

const ChartMenu = styled.div`
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

export const StocksChart: React.FC<StocksChartProps> = props => {
	const { request } = useFinanceApi();
	const [data, setData] = useState([]);

	const toChartData = (item: any) => ({
		datetime: item.datetime,
		price: item.high
	});

	const refresh = () => {
		const params = {
			symbol: props.symbol,
			interval: '1week',
			outputsize: '10'
		};
		request('/time_series', HttpMethod.GET, params).then((result: any) => {
			if (result && result.values) {
				const values = result.values.reverse();
				setData(values.map(toChartData));
			} else if (props.symbol) {
				alert('Request limit reached. Please wait a minute!');
			}
		});
	};

	useEffect(refresh, [props.symbol]);

	return (
		<ChartRoot>
			<ChartMenu>
				<MenuButton onClick={ refresh }>
					Refresh
				</MenuButton>
			</ChartMenu>
			<ChartContent>
				<BaseChart data={ data } keys="datetime" values="price" />
			</ChartContent>
		</ChartRoot>
	);
};
