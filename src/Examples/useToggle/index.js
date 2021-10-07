import { useToggle } from "../../Hooks/useToggle";

/**
 * How To Use
 *  - const [value, togglevVlaue] = useToggle(defaultValue);
 * 		- If No defaultValue : Default Value is false
 *
 * 	- toggleValue()
 * 		- Reverse Current Value
 *
 * 	- toggleValue(true || false)
 * 		- Set Your Value
 */

export function ToggleExample() {
	const [showBox, toggleShowBox] = useToggle(false);

	return (
		<div>
			<h2>Use Toggle</h2>
			<button onClick={toggleShowBox}>Toggle</button>
			<button onClick={() => toggleShowBox(true)}>Show</button>
			<button onClick={() => toggleShowBox(false)}>Hide</button>

			{showBox && <div className="box"></div>}
		</div>
	);
}
