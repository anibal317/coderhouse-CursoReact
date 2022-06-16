import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";

function ItemDetailConrainer() {
	const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const {detalleId} = useParams()

	useEffect(() => {
		getFetch()
			.then((res) => {
				setProductDetail(res.find(el=> el.id==detalleId));
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
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				marginLeft: "20px",
			}}
		>
			<img src={productDetail.img} style={{ marginRight: "20px" }} />
			<div
				key={productDetail.id}
				style={{ width: "18rem" }}
				title="alam"
				className="card"
			>
				<h1>Detalle del Producto: {productDetail.name}</h1>
				<div className="list-group">
					<p className="list-group-item">
						Detalle: {productDetail.description}
					</p>
					<p className="list-group-item">Stock: {productDetail.stock}</p>
				</div>
			</div>
		</div>
	);
}

export default ItemDetailConrainer;
