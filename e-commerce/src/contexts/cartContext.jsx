import React, { createContext } from "react";
import { useState } from "react";

export const CarContext = createContext([]);

function CartContextProvider({ children }) {
	const [cart, serCart] = useState([]);
	const addToCart = (item) => {
		serCart([...cart, item]);
	};

	const vaciarCarrito = () => {
		serCart([]);
	};

	const productExist = (filterId) => {
		let strfilter = filterId;
		return cart.find((element) => element.id === strfilter);
	};

	const updateProductQuantity = (filterObj,count) => {
		console.log("Cart",cart)
		let strfilter = filterObj.id;
		let newQty = count;
		cart.find((element) => {
			if (element.id === strfilter) {
				element.quantity = element.quantity + newQty;
			}
		});
	};

	return (
		<CarContext.Provider
			value={{
				cart,
				addToCart,
				vaciarCarrito,
				productExist,
				updateProductQuantity
			}}
		>
			{children}
		</CarContext.Provider>
	);
}

export default CartContextProvider;
