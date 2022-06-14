import React, { useEffect, useState } from "react";
import { getFetchById } from "../../helpers/getFetch";

function ItemDetailConrainer() {
	const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getFetchById()
			.then((res) => {
				setProductDetail(res);
			})
			.catch((e) => setError(true))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An error has ocurred</div>;
	}
	return (
		<div>
			<div
				key={productDetail.id}
				style={{ width: "18rem" }}
				title="alam"
				className="card"
			>
				<h1>Detalle del Producto: {productDetail.name}</h1>
                <div className="list-group">
                    <p className="list-group-item">Detalle: {productDetail.description}</p>
                    <p className="list-group-item">Stock: {productDetail.stock}</p>
                </div>
			</div>
		</div>
	);
}

export default ItemDetailConrainer;
