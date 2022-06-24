import React from "react";
import { useContext } from "react";
import { CarContext } from "../../contexts/cartContext";

function Cart() {
	const { cart } = useContext(CarContext);
console.log(cart)
	return (
		<div>
			
				{cart.map((item) => (
					<div key={item.id} className="container border border-primary">
            <div>
              <img src={require(`../ItemDetail/src/imgs/${item.img}`)} alt="" />
            </div>
          </div>
				))}
			
		</div>
	);
}

export default Cart;
