import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./src/css/style.css"
function Counter() {
	const [count, setCount] = useState(0);
	function increaseCount() {
		setCount(count + 1);
	}

	return (
			count > 0
			?
					<div> 
						<Link to={`/cart`}>
							<button href="#" className="btn btn-outline-primary btn-block">IR A CARRITO</button>
						</Link> 
					</div>
			:
					<div >
						<h2>La cantidad es = {count}</h2>
						<button onClick={increaseCount}>Aumentar </button>
					</div>		
	);
}

export default Counter;
