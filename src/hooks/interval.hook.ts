import { useState, useEffect } from 'react';

type IntervalHook = [string, (value: string) => void];

const storage = 'interval';

export const useInterval = (defaultValue: string): IntervalHook => {
	const [interval, update] = useState(defaultValue);

	useEffect(() => {
		const value = localStorage.getItem(storage);
		value && update(value);
	}, []);

	return [
		interval,
		(value: string) => {
			localStorage.setItem(storage, value);
			update(value);
		}
	];
};
