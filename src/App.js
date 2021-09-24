import { useState } from "react";
import { useTimeout } from "./Hook/useTimeout";

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

function App() {
	const [count, setCount] = useState(10);
	const { reset, clear } = useTimeout(() => setCount(0), 1000);

	return (
		<div className="App">
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
			<button onClick={clear}>Clear Timeout</button>
			<button onClick={reset}>Reset Timeout</button>
		</div>
	);
}

export default App;
