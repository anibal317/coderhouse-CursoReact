import React, { useContext, useState } from "react";
import { CarContext } from "../../contexts/cartContext";
import './src/css/style.css';


export const CartWidget = () => {
	const { cart, cantidadTotal } = useContext(CarContext);

	function totalCantidadCarrito(){
		let totalItems=0
		cart.forEach(element => {
			console.log(element.quantity)
			totalItems+=element.quantity
		});
		// console.log(totalItems)
		return totalItems
	}
	// totalCantidadCarrito()
console.log()
	return (
		<>
		<div className="dot">{totalCantidadCarrito()}</div>
			<img
				src={require("./src/imgs/shopping-cart-40px.png")}
				className=""
				alt=""
			/>
		</>
	);
};
