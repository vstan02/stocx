import { useState, useCallback } from 'react';
import axios from 'axios';

import { FINANCE_API, FINANCE_HOST, FINANCE_KEY } from '../config';

export enum HttpMethod {
	GET = 'GET',
	POST = 'POST'
}

interface HttpHook {
	error: string;
	request(url: string, method?: HttpMethod, data?: any): any;
	abort(): void;
	clearError(): void;
}

export const useFinanceApi = (): HttpHook => {
	const source = axios.CancelToken.source();
	const [error, setError] = useState('');

	const request = useCallback(async (uri, method = HttpMethod.GET, params = {}) => {
		try {
			const url = FINANCE_API + uri;
			const headers = {
				'x-rapidapi-key': FINANCE_KEY,
				'x-rapidapi-host': FINANCE_HOST
			};
			const cancelToken = source.token;
			const  response = await axios({ url, method, params, headers, cancelToken });

			if (response.data.status !== 'ok')
				return setError('Finance api error');
			return response.data;
		} catch (e) {
			setError(e.message);
		}
	}, []);

	const abort = () => source.cancel();
	const clearError = () => setError('');
	return { error, request, abort, clearError };
};
