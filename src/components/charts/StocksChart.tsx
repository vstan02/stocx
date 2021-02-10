import React, { useContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import styled from 'styled-components';

import { AuthContext } from '../../context';
import { HttpMethod, useBaseApi, useFinanceApi } from '../../hooks';

import { MenuButton } from '../buttons';
import { OptionInput } from '../inputs';

import { BaseChart } from './BaseChart';

interface StocksChartProps {
	symbol: string;
}

const DEFAULT_INTERVAL = '1month';
const OPTIONS = [
	{ value: '1min', text: '1 Minute' },
	{ value: '5min', text: '5 Minutes' },
	{ value: '15min', text: '15 Minutes' },
	{ value: '30min', text: '30 Minutes' },
	{ value: '45min', text: '45 Minutes' },
	{ value: '1h', text: '1 Hour' },
	{ value: '2h', text: '2 Hours' },
	{ value: '4h', text: '4 Hours' },
	{ value: '1day', text: '1 Day' },
	{ value: '1week', text: '1 Week' },
	{ value: '1month', text: '1 Month' }
];

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
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ChartContent = styled.div`
	width: calc(100% - 100px);
	height: calc(100% - 80px);
	
	@media (max-width: 1024px) {
		width: 100%;
		padding-right: 30px;
	}
`;

const ChartSymbol = styled.div`
	width: 450px;
	font-size: 30px;
	font-weight: bold;
	padding-left: 60px;
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	
	@media (max-width: 800px) {
		font-size: 20px;
	}
`;

const ChartControl = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 540px) {
		flex-direction: column;
	}
`;

export const StocksChart: React.FC<StocksChartProps> = props => {
	const baseApi = useBaseApi();
	const financeApi = useFinanceApi();

	const { token } = useContext(AuthContext);
	const result: any = jwt.decode(token);

	const [interval, setInterval] = useState(result.interval || DEFAULT_INTERVAL);
	const [data, setData] = useState([]);

	const toChartData = (item: any) => ({
		datetime: item.datetime,
		price: item.high
	});

	const updateInterval = (value: string) => {
		setInterval(value);
		baseApi.request('/interval', HttpMethod.POST,  {
			token, interval: value
		});
	};

	const updateChart = () => {
		const params = {
			interval,
			symbol: props.symbol,
			outputsize: '10'
		};
		financeApi.request('/time_series', HttpMethod.GET, params).then((result: any) => {
			if (result && result.values) {
				const values = result.values.reverse();
				setData(values.map(toChartData));
			} else if (props.symbol) {
				alert('Request limit reached. Please wait a minute!');
			}
		});
	};

	const unmount = () => {
		baseApi.abort();
		financeApi.abort();
	};

	useEffect(updateChart, [props.symbol, interval]);
	useEffect(() => unmount, []);

	return (
		<ChartRoot>
			<ChartMenu>
				<ChartSymbol>
					Symbol: { props.symbol }
				</ChartSymbol>
				<ChartControl>
					<OptionInput
						label="Set interval"
						value={ interval }
						options={ OPTIONS }
						onChange={ updateInterval }
					/>
					<MenuButton onClick={ updateChart }>
						Refresh
					</MenuButton>
				</ChartControl>
			</ChartMenu>
			<ChartContent>
				<BaseChart data={ data } keys="datetime" values="price" />
			</ChartContent>
		</ChartRoot>
	);
};
