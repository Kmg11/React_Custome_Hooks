import { useArray } from "./Hook/useArray";

/**
 * How To Use
 *  - const { array, set, push, filter, update, remove, clear } = useArray(array);
 *
 *	- array: Your Array
 *
 *	- set(newArray): Set New Array
 *
 *	- unshift(element): Add Item To End Of Array
 *
 *	- push(element): Add Item To Start Of Array
 *
 * 	- filter(callback): Filter Array
 *
 * 	- update(index, element): Update Index Value
 *
 * 	- remove(index): Remove Element By Index
 *
 * 	- clear(): Clear All Array Items
 */

function App() {
	const { array, set, unshift, push, filter, update, remove, clear } = useArray(
		[1, 2, 3, 4, 5, 6]
	);

	return (
		<div className="App">
			<div>{array.join(", ")}</div>

			<button onClick={() => unshift(7)}>Add Before 7</button>
			<button onClick={() => push(7)}>Add After 7</button>
			<button onClick={() => update(1, 9)}>Change Second Element To 9</button>
			<button onClick={() => remove(1)}>Remove Second Element</button>
			<button onClick={() => filter((prev) => prev < 3)}>
				Keep Numbers Less Than 3
			</button>
			<button onClick={() => set([1, 2])}>Set To 1, 2</button>
			<button onClick={clear}>Clear</button>
		</div>
	);
}

export default App;
