import { useCallback, useEffect, useRef } from "react";

/**
 * How To Use
 *  - const { reset, clear } = useTimeout(callback, delay);
 * 		- You Can Use It Without { reset, clear } - [ useTimeout(callback, delay) ]
 *
 * 	- reset()
 * 		- Reset Timeout
 *
 * 	- clear()
 * 		- Clear Timeout
 */

export function useTimeout(callback, delay) {
	const callbackRef = useRef(callback);
	const timeoutRef = useRef();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
	}, [delay]);

	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	useEffect(() => {
		set();
		return clear;
	}, [delay, set, clear]);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	return { reset, clear };
}
