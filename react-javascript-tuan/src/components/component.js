import React, { useRef, useEffect } from "react";

const Component = () => {
	const inputRef = useRef(null);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div>
			<input type="text" ref={inputRef} />
		</div>
	);
};

export default Component;
