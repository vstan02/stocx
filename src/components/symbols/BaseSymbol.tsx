import React from 'react';
import styled from 'styled-components';

interface Symbol {
	symbol: string;
	country: string;
	currency: string;
	exchange: string;
}

interface BaseSymbolProps {
	target: Symbol;
}

const SymbolRoot = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

const SymbolSymbol = styled.div`
	font-weight: bold;
	color: ${ ({ theme }) => theme.color.BASE_BETA }
`;

const SymbolDetails = styled.div`
	display: flex;
	flex-direction: column;
`;

const SymbolField = styled.span`
	font-weight: bold;
	color: ${ ({ theme }) => theme.color.BASE_BETA };
`;

export const BaseSymbol: React.FC<BaseSymbolProps> = props => (
	<SymbolRoot>
		<SymbolDetails>
			<div>
				<SymbolField>Country:</SymbolField> { props.target.country }
			</div>
			<div>
				<SymbolField>Currency:</SymbolField> { props.target.currency }
			</div>
			<div>
				<SymbolField>Exchange:</SymbolField> { props.target.exchange }
			</div>
		</SymbolDetails>
		<SymbolSymbol>
			{ props.target.symbol }
		</SymbolSymbol>
	</SymbolRoot>
);
