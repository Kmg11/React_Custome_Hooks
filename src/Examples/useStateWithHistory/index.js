import { useState } from "react";
import { useStateWithHistory } from "../../Hooks/useStateWithHistory";

/**
 * How To Use
 * 	- const [
 * 			value,
 * 			setValue,
 *  		{
 *  			history,
 *  			pointer,
 *  			back,
 *  			forward,
 *  			go
 *  		}
 *  	] = useStateWithHistory(defaultValue, { capacity: 5 });
 *
 * 	- value: Current Value
 * 	- setValue: Set New Value
 * 	- history: History Of The State
 * 	- pointer: The Current Index
 * 	- back: Go Back To Previous Index
 * 	- forward: Go Forward To Previous Index
 * 	- go: Go To Specific Index
 * 	- defaultValue: Start Value
 * 	- capacity: [ Optional ] Capacity Of History By Default 10
 */

export function StateWithHistoryExample() {
	const [name, setName] = useState("Kirolos");
	const [count, setCount, { history, pointer, back, forward, go }] =
		useStateWithHistory(1, { capacity: 5 });

	return (
		<div>
			<h2>Use StateWithHistory</h2>

			<div>Count - {count}</div>
			<div>history - {history.join(", ")}</div>
			<div>pointer - {pointer}</div>
			<div>name - {name}</div>

			<button onClick={() => setCount((currentCount) => currentCount * 2)}>
				Double
			</button>
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				Increment
			</button>
			<button onClick={back}>Back</button>
			<button onClick={forward}>Forward</button>
			<button onClick={() => go(2)}>Go To Index 2</button>
			<button onClick={() => setName("John")}>Change Name</button>
		</div>
	);
}
