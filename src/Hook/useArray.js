import { useState } from "react";

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

export function useArray(defaultValue) {
	const [array, setArray] = useState(defaultValue);

	function unshift(element) {
		setArray((prev) => [element, ...prev]);
	}

	function push(element) {
		setArray((prev) => [...prev, element]);
	}

	function filter(callback) {
		array.length > 0 && setArray((prev) => prev.filter(callback));
	}

	function update(index, newElement) {
		array.length > 0 &&
			setArray((prev) => [
				...prev.slice(0, index),
				newElement,
				...prev.slice(index + 1, prev.length),
			]);
	}

	function remove(index) {
		array.length > 0 &&
			setArray((prev) => [
				...prev.slice(0, index),
				...prev.slice(index + 1, prev.length),
			]);
	}

	function clear() {
		array.length > 0 && setArray([]);
	}

	return {
		array,
		set: setArray,
		unshift,
		push,
		filter,
		update,
		remove,
		clear,
	};
}
