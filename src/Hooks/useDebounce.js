import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

/**
 * How To Use
 * 	- You Need useTimeout Hook To Work With useDebounce
 *  - useDebounce(callback, delay, [dependencies]);
 */

export function useDebounce(callback, delay, dependencies) {
	const { reset, clear } = useTimeout(callback, delay);

	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, [clear]);
}
