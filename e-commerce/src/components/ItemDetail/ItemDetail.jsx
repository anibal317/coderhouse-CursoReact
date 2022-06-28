import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ItemDetail({ name, img, desc, stock, Id, price }) {
	return (
		<div>
			<div className="text-center">
				<div className="card-header">
					<h5 className="card-title text-center">{name}</h5>
				</div>
				<img className="card-img-top" src={img} alt="" />
				<div className="card-body">
					<p className="card-text">
						{desc} - stcok actual: {stock} unidades
					</p>
					<p>Precio: ${price}</p>
				</div>
				<div className="card-footer text-center">
					<Link to={`/detalle/${Id}`}>
						<button className="btn btn-outline-primary btn-block">Buy</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ItemDetail;
