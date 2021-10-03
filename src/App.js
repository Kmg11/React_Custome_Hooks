import { useState } from "react";
import { useAxios } from "./Hook/useAxios";

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
 * 			- You Can Change Method, Add Body Like {method: "POST", body: JSON.stringify({ title: "hello" }
 * 	- dependencies: Array Of Dependencies To Use It [runNow: true]
 * 	- runNow
 * 			- true: Run Fetch When Call Hook
 * 			- false: Run Fetch When Call fetchData Function
 */

function App() {
	const [id, setId] = useState(1);
	const { fetchData, loading, error, data } = useAxios(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{},
		[id],
		true
	);

	// const { fetchData, loading, error, data } = useAxios(
	// 	`https://jsonplaceholder.typicode.com/posts/`,
	// 	{
	// 		method: "POST",
	// 		body: JSON.stringify({ title: "hello" }),
	// 	},
	// 	[id],
	// 	false
	// );

	return (
		<div>
			<div>{id}</div>
			<button onClick={fetchData}>Trigger Fetch</button>
			<button onClick={() => setId((currentId) => currentId + 1)}>
				Increment ID
			</button>
			<div>Loading: {loading.toString()}</div>
			<div>{JSON.stringify(error, null, 2)}</div>
			<div>{JSON.stringify(data, null, 2)}</div>
		</div>
	);
}

export default App;
