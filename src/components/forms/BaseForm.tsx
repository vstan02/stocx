import React from 'react';
import styled from 'styled-components';

interface BaseFromProps {
	title: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormRoot = styled.form`
	width: 500px;
	padding: 35px 55px;
	overflow-y: scroll;
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	border-radius: 3px;
	box-shadow: 0 0 5px ${ ({ theme }) => theme.color.BASE_ALPHA };
	
	@media (max-width: ${ ({ theme }) => theme.bkps.DELTA }) {
		width: 100%;
		height: 100%;
		border-radius: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const FormTitle = styled.h1`
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	margin-bottom: 30px;

	@media (max-width: ${ ({ theme }) => theme.bkps.DELTA }) {
		margin: 0;
	}
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
