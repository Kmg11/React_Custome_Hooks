import { useAsync } from "../../Hooks/useAsync";

/**
 * How To Use
 * 	- const { loading, error, value } = useAsync(promise, dependencies);
 */

export function AsyncExample() {
	const { loading, error, value } = useAsync(() => {
		return new Promise((resolve, reject) => {
			const success = true;

			setTimeout(() => {
				success ? resolve("Hi") : reject("Error");
			}, 1000);
		});
	});

	return (
		<div>
			<h2>Use Async</h2>

			<div>Loading: {loading.toString()}</div>
			<div>{error}</div>
			<div>{value}</div>
		</div>
	);
}
