import { useAsync } from "./Hook/useAsync";

/**
 * How To Use
 * 	- const { loading, error, value } = useAsync(promise, dependencies);
 */

function App() {
	const { loading, error, value } = useAsync(() => {
		return new Promise((resolve, reject) => {
			const success = true;

			setTimeout(() => {
				success ? resolve("Hi") : reject("Error");
			}, 1000);
		});
	});

	return (
		<div className="App">
			<div>Loading: {loading.toString()}</div>
			<div>{error}</div>
			<div>{value}</div>
		</div>
	);
}

export default App;
