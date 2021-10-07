import { useState } from "react";
import { useDebounce } from "../../Hooks/useDebounce";

/**
 * How To Use
 * - You Need useTimeout Hook To Work With useDebounce
 *  - useDebounce(callback, delay, [dependencies]);
 */

export function DebounceExample() {
	const [count, setCount] = useState(10);
	useDebounce(() => alert("Done"), 1000, [count]);

	return (
		<div>
			<h2>Use Debounce</h2>
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	);
}
