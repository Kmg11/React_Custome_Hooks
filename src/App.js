import { useState } from "react";
import { useDebounce } from "./Hook/useDebounce";

/**
 * How To Use
 * - You Need useTimeout Hook To Work With useDebounce
 *  - useDebounce(callback, delay, [dependencies]);
 */

function App() {
	const [count, setCount] = useState(10);
	useDebounce(() => alert("Done"), 1000, [count]);

	return (
		<div className="App">
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	);
}

export default App;
