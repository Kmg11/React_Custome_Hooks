import { useState } from "react";
import { useTimeout } from "../../Hooks/useTimeout";

/**
 * How To Use
 *  - const { reset, clear } = useTimeout(callback, delay);
 * 		- You Can Use It Without { reset, clear } - [ useTimeout(callback, delay) ]
 *
 * 	- reset()
 * 		- Reset Timeout
 *
 * 	- clear()
 * 		- Clear Timeout
 */

export function TimeoutExample() {
	const [count, setCount] = useState(10);
	const { reset, clear } = useTimeout(() => setCount(0), 1000);

	return (
		<div>
			<h2>Use Timeout</h2>
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
			<button onClick={clear}>Clear Timeout</button>
			<button onClick={reset}>Reset Timeout</button>
		</div>
	);
}
