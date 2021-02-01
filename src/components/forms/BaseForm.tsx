import React from 'react';
import styled from 'styled-components';

interface BaseFromProps {
	title: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormRoot = styled.form`
	width: 500px;
	padding: 35px 55px;
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	border-radius: 3px;
	box-shadow: 0 0 5px ${ ({ theme }) => theme.color.BASE_ALPHA };
`;

const FormTitle = styled.h1`
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	margin-bottom: 30px;
`;

export const BaseForm: React.FC<BaseFromProps> = props => {
	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (props.onSubmit) {
			props.onSubmit(event);
		}
	};

	return (
		<FormRoot onSubmit={ submit }>
			<FormTitle>{ props.title }</FormTitle>
			{ props.children }
		</FormRoot>
	);
};
