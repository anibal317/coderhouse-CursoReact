import React, { createContext } from "react";
import { useState } from "react";

export const CarContext = createContext([]);

function CartContextProvider({ children }) {
	const [cart, serCart] = useState([]);
	const addToCart = (item) => {
		serCart([...cart, item]);
	};
	return (
		<CarContext.Provider
			value={{
				cart,
				addToCart,
			}}
		>
			{children}
		</CarContext.Provider>
	);
}

export default CartContextProvider;
