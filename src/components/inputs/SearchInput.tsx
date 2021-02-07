import * as React from 'react';
import styled from 'styled-components';

import { BaseInput } from './BaseInput';

interface FormInputProps {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}

const InputRoot = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	
	& > input {
		height: 40px;
		width: 80%;
	}
	
	&:focus-within > div {
		width: 80%;
		height: 2px;
	}
`;

const InputFocus = styled.div`
	width: 0;
	height: 0;
	position: relative;
	bottom: 1px;
	background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	transition: .5s width;
	align-self: center;
`;

export const SearchInput: React.FC<FormInputProps> = props => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(event.target.value);
	};

	return (
		<InputRoot>
			<BaseInput
				type="search"
				placeholder={ props.placeholder }
				value={ props.value }
				onChange={ onChange }
			/>
			<InputFocus />
		</InputRoot>
	);
};
