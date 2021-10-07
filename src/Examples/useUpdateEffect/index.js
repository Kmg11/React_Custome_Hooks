import { useState } from "react";
import { useUpdateEffect } from "../../Hooks/useUpdateEffect";

/**
 * How To Use
 *  - useUpdateEffect(callback, [dependencies]);
 */

export function UpdateEffectExample() {
	const [count, setCount] = useState(10);
	useUpdateEffect(() => alert("Done"), [count]);

	return (
		<div>
			<h2>Use UpdateEffect</h2>
			<div>Count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increase</button>
		</div>
	);
}
