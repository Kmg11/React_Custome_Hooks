import { useCallback, useEffect, useRef, useState } from "react";

/**
 * How To Use
 * 	- const { fetchData, loading, error, data } = useFetch(url, options, dependencies, runNow);
 *
 * 	- fetchData:
 * 			- Fetch Data Function Help You Fetch Data Again
 * 			- OR - Help You Fetch Data If {runNow: false}
 * 	- loading: Loading State
 * 	- error: Error State
 * 	- data: Data Back From API
 * 	- url: End Point
 * 	- options:
 * 			- Fetch Options By Default {headers: Set To Json } and Signal
 * 			- By Default {method: "GET"}
 * 			- You Can Change Method, Add Body
 * 			- Example - Like {method: "POST", body: JSON.stringify({ title: "hello" }
 * 	- dependencies: Array Of Dependencies To Use It [runNow: true]
 * 	- runNow
 * 			- true: Run Fetch When Call Hook
 * 			- false: Run Fetch When Call fetchData Function
 */

export function useFetch(url, options = {}, dependencies = [], runNow = true) {
	const [loading, setLoading] = useState(runNow);
	const [error, setError] = useState();
	const [data, setData] = useState();

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	const DEFAULT_OPTIONS = {
		headers: { "Content-Type": "application/json" },
		signal: abortCountCurrent.signal,
	};

	useEffect(() => {
		return () => abortCountCurrent.abort();
	}, [abortCountCurrent]);

	const fetchData = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setData(undefined);

		fetch(url, { ...DEFAULT_OPTIONS, ...options })
			.then((res) => {
				if (res.ok) return res.json();
				throw Error("An error occurred. Awkward..");
			})
			.then(setData)
			.catch((err) => {
				if (err.name !== "AbortError") setError(err.message);
			})
			.finally(() => setLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies, url]);

	useEffect(() => {
		if (runNow) fetchData();
	}, [fetchData, runNow]);

	return { fetchData, loading, error, data };
}