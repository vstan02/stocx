import * as React from 'react';
import styled from 'styled-components';

import { BaseInput } from './BaseInput';

interface FormInputProps {
	type?: string;
	value: string;
	label: string;
	required?: boolean;
	onChange: (value: string) => void;
}

const InputRoot = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 20px 0;
	
	&:focus-within > div {
		width: calc(100% + 8px);
		height: 2px;
	}
	
	@media (max-width: 560px) {
		&:focus-within > div {
			width: 100%;
		}
	}
`;

const InputLabel = styled.label`
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
`;

const InputFocus = styled.div`
	width: 0;
	height: 0;
	position: relative;
	left: 5px;
	bottom: 1px;
	background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	transition: 0.5s width;
	align-self: center;
	
	@media (max-width: 560px) {
		left: 0;
	}
`;

export const FormInput: React.FC<FormInputProps> = props => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(event.target.value);
	};

	return (
		<InputRoot>
			<InputLabel>
				{ props.label }
			</InputLabel>
			<BaseInput
				required={ props.required }
				type={ props.type }
				value={ props.value }
				onChange={ onChange }
			/>
			<InputFocus />
		</InputRoot>
	);
};
