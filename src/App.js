import { useState } from "react";
import { useUpdateEffect } from "./Hook/useUpdateEffect";

/**
 * How To Use
 *  - useUpdateEffect(callback, [dependencies]);
 */

function App() {
	const [count, setCount] = useState(10);
	useUpdateEffect(() => alert("Done"), [count]);

	return (
		<div className="App">
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	);
}

export default App;
