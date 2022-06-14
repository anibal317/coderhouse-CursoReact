import React, { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getFetch()
			.then((res) => {
				setProducts(res);
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
			<h1>Productos</h1>

			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{products.map((product) => (
					<div style={{ width: "18rem" }} title="alam" className="card">
						<ItemList
							key={product.id}
							itemName={product.name}
							itemImg={product.img}
							itemDesc={product.description}
							itemStock={product.stock}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemListContainer;
