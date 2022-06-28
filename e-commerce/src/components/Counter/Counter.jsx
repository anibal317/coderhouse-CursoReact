import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../contexts/cartContext";
import "./src/css/style.css";

function Counter({ prod }) {
	const [count, setCount] = useState(0);
	const { addToCart, productExist, updateProductQuantity } =
		useContext(CarContext);

	function increaseCount() {
		setCount(count + 1);
	}

	function decreaseCount() {
		setCount(count - 1);
	}

	const onAdd = () => {
		if (productExist(prod.id)) {
			updateProductQuantity(prod,count);
		} else {
			addToCart({ ...prod, quantity: count });
		}
	};

	return (
		<div>
			<div>
				<div className="p-2">
					<div className=" border border-primary text-center p-3">
						<h2 className="bg-secondary p-2 m-2"> {count}</h2>
						<button className="btn btn-success p-2" onClick={increaseCount}>
							Add
						</button>
						<button className="btn btn-danger p-2" disabled={count<=0?"disabled":""}  onClick={decreaseCount}>
							Less
						</button>
					</div>
				</div>
			</div>
			{count > 0 ? (
				<div>
					<div className="container text-center mt-2 mb-2">
						<button className="btn btn-primary" onClick={onAdd}>
							Agregar al Carrito
						</button>
					</div>
					<div className="text-center mb-3">
						<Link to={`/cart`}>
							<button href="#" className="btn btn-outline-success btn-block">
								Ir al carrito
							</button>
						</Link>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
export default Counter;
