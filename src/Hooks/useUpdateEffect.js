import { useEffect, useRef } from "react";

/**
 * How To Use
 *  - useUpdateEffect(callback, [dependencies]);
 */

export function useUpdateEffect(callback, ...dependencies) {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}

		return callback();
	}, [dependencies, callback]);
}
