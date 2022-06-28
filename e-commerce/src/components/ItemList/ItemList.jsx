import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList({ itemName, itemImg, itemDesc, itemStock, itemId,itemPrice }) {
	return (
		<ItemDetail
			className="card"
			name={itemName}
			img={itemImg}
			desc={itemDesc}
			stock={itemStock}
			price={itemPrice}
			Id={itemId}
		/>
	);
}

export default ItemList;
