import { useCallback, useRef, useState } from "react";

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

export function useStateWithHistory(defaultValue, { capacity = 10 } = {}) {
	const [value, setValue] = useState(defaultValue); // Current Value
	const historyRef = useRef([value]); // History Of Values
	const pointerRef = useRef(0); // Current Index

	const set = useCallback(
		(v) => {
			// Check if v is function or value
			const resolvedValue = typeof v === "function" ? v(value) : v;

			// Check if the new value is not equal to any of the history values
			if (historyRef.current[pointerRef.current] !== resolvedValue) {
				// Check whether the pointer is on the last item or not
				if (pointerRef.current < historyRef.current.length - 1) {
					// Remove All Elements After Pointer
					historyRef.current.splice(pointerRef.current + 1);
				}

				// Add The New Value To The History
				historyRef.current.push(resolvedValue);

				// Check If The History Length More Thant Capacity
				while (historyRef.current.length > capacity) {
					// Remove First Element From History
					historyRef.current.shift();
				}

				// Set Pointer To Current Index
				pointerRef.current = historyRef.current.length - 1;
			}

			// Set Current Value
			setValue(resolvedValue);
		},
		[capacity, value]
	);

	// Go To Previous Value
	const back = useCallback(() => {
		if (pointerRef.current <= 0) return;
		pointerRef.current--;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	// Go To Next Value
	const forward = useCallback(() => {
		if (pointerRef.current >= historyRef.current.length - 1) return;
		pointerRef.current++;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	// Go To Specific Value
	const go = useCallback((index) => {
		if (index < 0 || index > historyRef.current.length - 1) return;
		pointerRef.current = index;
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	return [
		value,
		set,
		{
			history: historyRef.current,
			pointer: pointerRef.current,
			back,
			forward,
			go,
		},
	];
}
