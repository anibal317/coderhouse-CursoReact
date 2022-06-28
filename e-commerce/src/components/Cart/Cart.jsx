import React from "react";
import { useContext } from "react";
import { CarContext } from "../../contexts/cartContext";

function Cart() {
	const { cart, vaciarCarrito } = useContext(CarContext);
	console.log(cart);
	return cart.length === 0 ? (
		<div className="container">No Hay elementos</div>
	) : (
		<div>
			<div>
				<button onClick={vaciarCarrito}>Vaciar Carrito</button>
			</div>
			<div className="cart-container  d-flex flex-row p-2 ml-2">
				{cart.map((item) => (
					<div key={item.id} className="container border border-primary">
						<div>
							<img
								src={require(`../ItemDetail/src/imgs/${item.img}`)}
								alt=""
								className="w-25"
							/>
						</div>
						<div>
							<h3>{item.name}</h3>
							<div>
								<p>{item.description}</p>
								<p>{item.quantity}</p>
								<p>Total: ${item.quantity * item.price}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cart;
