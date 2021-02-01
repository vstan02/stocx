import React, { useState } from 'react';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForm: React.FC = () => {
	const [registered, setRegistered] = useState(true);

	const toggleRegistered = () => setRegistered(!registered);

	return registered
		? <LoginForm toRegister={ toggleRegistered } />
		: <RegisterForm toLogin={ toggleRegistered } />;
};
