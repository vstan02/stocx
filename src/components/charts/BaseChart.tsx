import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

interface BaseChartProps {
	key: string;
	value: string;
	data: Array<object>;
}

export const BaseChart: React.FC<BaseChartProps> = props => (
	<ResponsiveContainer>
		<AreaChart data={ props.data }>
			<XAxis dataKey={ props.key } stroke="#FFFFFF" />
			<YAxis stroke="#FFFFFF" />
			<Tooltip />
			<CartesianGrid stroke="#172331" strokeDasharray="2 2" />
			<Area
				type="monotone"
				dataKey={ props.value }
				stroke="#7bcbf0"
				fillOpacity={ 1 }
				fill="#7bcbf047"
			/>
		</AreaChart>
	</ResponsiveContainer>
);
