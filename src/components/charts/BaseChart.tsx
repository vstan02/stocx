import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface BaseChartProps {
	keys: string;
	values: string;
	data: Array<object>;
}

export const BaseChart: React.FC<BaseChartProps> = props => {
	const theme = useContext(ThemeContext);
	return (
		<ResponsiveContainer>
			<AreaChart data={ props.data }>
				<Tooltip/>
				<XAxis
					dataKey={ props.keys }
					stroke={ theme.color.CONTRAST_ALPHA }
				/>
				<YAxis
					dataKey={ props.values }
					stroke={ theme.color.CONTRAST_ALPHA }
					domain={ [0, (max: number) => (max * 1.5)] }
					allowDataOverflow
				/>
				<CartesianGrid
					stroke={ theme.color.BASE_ALPHA }
					strokeDasharray="2 2"
				/>
				<Area
					type="monotone"
					dataKey={ props.values }
					stroke={ theme.color.PRIMARY_BETA }
					fillOpacity={ 0.45 }
					fill={ theme.color.PRIMARY_BETA }
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
