import {
	addDoc,
	collection,
	doc,
	documentId,
	getDocs,
	getFirestore,
	query,
	updateDoc,
	where,
	writeBatch,
} from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../contexts/cartContext";

function Cart() {
	const { cart, vaciarCarrito, precioTotal } = useContext(CarContext);
	const [orderId, setOrderId] = useState("");

	const db = getFirestore();

	async function generarOrden(e) {
		e.preventDefault();
		let orden = {};
		let items = cart.map((cartItem) => {
			const id = cartItem.id;
			const nombre = cartItem.name;
			const precio = cartItem.price * cartItem.quantity;

			return { id, nombre, precio };
		});
		orden.buyer = {
			name: "Jorge Sardón",
			email: "jorge.sardon@myemail.net",
			phone: "+54123456789",
		};
		orden.total = precioTotal();
		orden.items = items;
		await insertElement(orden).finally(updateStock());
	}

	async function insertElement(or) {
		//Insert
		const orderCollection = collection(db, "orders");
		await addDoc(orderCollection, or).then((res) => {
			setIdOrder(res.id);
		});
	}

	async function updateElement() {
		//Update
		const updateCollection = doc(db, "productos", "ESjfHQtNqewACinWpI2I");
		updateDoc(updateCollection, { stock: 190 });
	}

	async function updateStock() {
		//Actualizar stock
		const queryCollection = collection(db, "productos");
		const queryActualizarStock = await query(
			queryCollection,
			where(
				documentId(),
				"in",
				cart.map((it) => it.id)
			)
		);

		const batch = writeBatch(db);
		await getDocs(queryActualizarStock)
			.then((res) =>
				res.docs.forEach((res) =>
					batch.update(res.ref, {
						stock:
							res.data().stock -
							cart.find((item) => item.id === res.id).quantity,
					})
				)
			)
			.finally(() => vaciarCarrito());
		batch.commit();
	}

	function setIdOrder(id) {
		setOrderId(id);
	}

	return cart.length === 0 ? (
		<div className="container">
			{orderId === "" ? (
				<div className="text-center">
					<div>Sin elementos comprados</div>
					<Link to={"/"} className="btn btn-primary">Volver a la tienda</Link>
				</div>
			) : (
				<p>
					Ud. ha realizado una compra con el siguiente código de seguimiento:{" "}
					<span className="bg-success text-light">#{orderId}</span>
				</p>
			)}
		</div>
	) : (
		<div className="text-center border border-primary">
			<h3>Carrito</h3>
			{/* <h4>{orden.buyer.name}</h4> */}
			<div className="text-center mb-2 ">
				<button className="btn btn-danger" onClick={vaciarCarrito}>
					Vaciar Carrito
				</button>
			</div>
			<div className="text-center mt-22">
				<button className="btn btn-success" onClick={generarOrden}>
					Finalizar compra
				</button>
			</div>
			<div className="cart-container  d-flex flex-row p-2 ml-2">
				{cart.map((item) => (
					<div key={item.id} className="container border border-primary">
						<div>
							<img src={item.img} alt="" className="w-25" />
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
