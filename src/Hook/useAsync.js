import { useCallback, useEffect, useState } from "react";

/**
 * How To Use
 * 	- const { loading, error, value } = useAsync(promise, dependencies);
 */

export function useAsync(callback, dependencies = []) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [value, setValue] = useState();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setValue(undefined);

		callback()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies, callback]);

	useEffect(() => {
		callbackMemoized();
	}, [callbackMemoized]);

	return { loading, error, value };
}
