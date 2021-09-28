import { useState } from "react";
import { usePrevious } from "./Hook/usePrevious";

/**
 * How To Use
 * 	- const previousValue = usePrevious(value);
 */

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Kirolos");
	const previousCount = usePrevious(count);
	const previousName = usePrevious(name);

	return (
		<div className="App">
			<div>
				{count} - {previousCount}
			</div>

			<div>
				{name} - {previousName}
			</div>

			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				Increment
			</button>
			<button onClick={() => setName("John")}>Change Name</button>
		</div>
	);
}

export default App;
