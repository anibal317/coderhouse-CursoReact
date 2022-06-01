import React, { Component } from "react";
import imgCart from "./src/imgs/shopping-cart-40px.png";

export class CartWidget extends Component {
	render() {
		return(
			<>
				<img src={imgCart} className=''/>
			</>
		);
	}
}

export default CartWidget;
