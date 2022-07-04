import React, { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [firebaseProds, setFirebaseProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		// getFetch()
		// 	.then((res) => {
		// 		// setProducts(res);
		// 	})
		// 	.catch((e) => setError(true))
		// 	.finally(() => setLoading(false));

		const db =getFirestore()
		// const queryItem = doc(db, "productos", "ESjfHQtNqewACinWpI2I");
		// getDoc(queryItem) //promesa
		const queryCollection = collection(db, "productos");
		getDocs(queryCollection)
			.then((res) =>
				setProducts(
					res.docs.map((item) => ({
						id: item.id,
						...item.data(),
					}))
				)
			)
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
					<div
						key={product.id}
						style={{ width: "18rem" }}
						title="alam"
						className="card"
					>
						<ItemList
							itemId={product.id}
							itemName={product.name}
							itemImg={product.img}
							itemDesc={product.description}
							itemStock={product.stock}
							itemPrice={product.price}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemListContainer;
