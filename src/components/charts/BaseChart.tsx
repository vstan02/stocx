import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface BaseChartProps {
	keys: string;
	values: string;
	data: Array<object>;
}

export const BaseChart: React.FC<BaseChartProps> = props => (
	<ResponsiveContainer>
		<AreaChart data={ props.data }>
			<XAxis dataKey={ props.keys } stroke="#FFFFFF" />
			<YAxis stroke="#FFFFFF" />
			<Tooltip />
			<CartesianGrid stroke="#172331" strokeDasharray="2 2" />
			<Area
				type="monotone"
				dataKey={ props.values }
				stroke="#7bcbf0"
				fillOpacity={ 0.45 }
				fill="#7bcbf0"
			/>
		</AreaChart>
	</ResponsiveContainer>
);
