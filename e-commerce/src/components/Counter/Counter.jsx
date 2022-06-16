import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	function increaseCount() {
		setCount(count + 1);
	}

	return (
		<div>
			<h2>La cantidad es = {count}</h2>
			<button onClick={increaseCount}>Aumentar </button>
		</div>
	);
}

export default Counter;
