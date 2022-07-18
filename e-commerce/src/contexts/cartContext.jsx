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

	const precioTotal = ()=>{
		return cart.reduce((contador,prod)=> contador+(prod.quantity*prod.price),0)
	}
	const cantidadTotal = ()=>{
		let total;
		cart.forEach((item)=>{
			console.log("item",item)
			total=+item.quantity
		})
		return total
	}
	
	const updateProductQuantity = (filterObj,count) => {
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
				updateProductQuantity,
				precioTotal,
				cantidadTotal
			}}
		>
			{children}
		</CarContext.Provider>
	);
}

export default CartContextProvider;
