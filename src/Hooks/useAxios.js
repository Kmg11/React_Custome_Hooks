import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

/**
 * How To Use
 * 	- const { fetchData, loading, error, data } = useAxios(url, options, dependencies, runNow);
 *
 * 	- fetchData:
 * 			- Fetch Data Function Help You Fetch Data Again
 * 			- OR - Help You Fetch Data If {runNow: false}
 * 	- loading: Loading State
 * 	- error: Error State
 * 	- data: Data Back From API
 * 	- url: End Point
 * 	- options:
 * 			- Fetch Options By Default {headers: Set To Json } and cancelToken
 * 			- By Default {method: "GET"}
 * 			- You Can Change Method, Add Body
 * 			- Example - Like {method: "POST", body: JSON.stringify({ title: "hello" }
 * 	- dependencies: Array Of Dependencies To Use It [runNow: true]
 * 	- runNow
 * 			- true: Run Fetch When Call Hook
 * 			- false: Run Fetch When Call fetchData Function
 */

export function useAxios(url, options = {}, dependencies = [], runNow = true) {
	const [loading, setLoading] = useState(runNow);
	const [error, setError] = useState();
	const [data, setData] = useState();

	const source = useRef(axios.CancelToken.source());
	const sourceCurrent = source.current;

	const DEFAULT_OPTIONS = {
		headers: { "Content-Type": "application/json" },
		cancelToken: sourceCurrent.token,
	};

	useEffect(() => {
		return () => sourceCurrent.cancel("An error occurred. Awkward..");
	}, [sourceCurrent]);

	const fetchData = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setData(undefined);

		axios({ url, ...DEFAULT_OPTIONS, ...options })
			.then(({ data }) => setData(data))
			.catch((err) => {
				if (!axios.isCancel(err)) setError("Error " + err.message);
			})
			.finally(() => setLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies, url]);

	useEffect(() => {
		if (runNow) fetchData();
	}, [fetchData, runNow]);

	return { fetchData, loading, error, data };
}
