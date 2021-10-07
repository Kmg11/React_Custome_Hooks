import { useRef } from "react";

/**
 * How To Use
 * 	- const previousValue = usePrevious(value);
 */

export function usePrevious(value) {
	const currentRef = useRef(value);
	const previousRef = useRef();

	if (currentRef.current !== value) {
		previousRef.current = currentRef.current;
		currentRef.current = value;
	}

	return previousRef.current;
}
