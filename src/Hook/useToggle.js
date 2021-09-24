import { useState } from "react";

/**
 * How To Use
 *  - const [value, togglevVlue] = useToggle(defaultValue);
 * 		- If No defaultValue : Default Value is false
 * 
 * 	- toggleValue()
 * 		- Reverse Current Value
 * 
 * 	- toggleValue(true || false)
 * 		- Set Your Value
 */

export function useToggle(defaultValue) {
	const [value, setValue] = useState(defaultValue ? defaultValue : false);

	function toggleValue(newValue) {
		if (newValue !== value) {
			setValue((currentValue) =>
				typeof newValue === "boolean" ? newValue : !currentValue
			);
		}
	}

	return [value, toggleValue];
}
