import React, { useEffect, useState } from 'react';

import { HttpMethod, useBaseApi } from '../../hooks';

import { FormInput } from '../inputs';
import { FormButton, TextButton } from '../buttons';
import { ErrorMessage, SuccessMessage } from '../messages';

import { BaseForm } from './BaseForm';

interface RegisterFormProps {
	toLogin(): void;
}

export const RegisterForm: React.FC<RegisterFormProps> = props => {
	const { request, error, clearError, abort } = useBaseApi();
	const [message, setMessage] = useState('');
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});

	const updateField = (field: string, value: string) => {
		setCredentials(prev => ({ ...prev, [field]: value }));
	};

	const submit = async () => {
		const data = await request('/auth/register', HttpMethod.POST, credentials);
		if (data) {
			clearError();
			setMessage('You have successfully registered');
		}
	};

	useEffect(() => abort, []);

	return (
		<BaseForm title='Register' onSubmit={ submit }>
			<FormInput
				required
				label='Username'
				value={ credentials.username }
				onChange={ value => updateField('username', value) }
			/>
			<FormInput
				required
				type='password'
				label='Password'
				value={ credentials.password }
				onChange={ value => updateField('password', value) }
			/>
			<ErrorMessage>{ error }</ErrorMessage>
			<SuccessMessage>{ message }</SuccessMessage>
			<FormButton>Submit</FormButton>
			<TextButton onClick={ props.toLogin }>
				Sign in instead
			</TextButton>
		</BaseForm>
	);
};
