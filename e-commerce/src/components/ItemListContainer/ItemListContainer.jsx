import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	// const [firebaseProds, setFirebaseProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { categoriaId } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const queryCollection = collection(db, "productos");

		if (categoriaId) {

			const queryCollectionFilter = query(
				queryCollection,
				where("category", "==", categoriaId)
			);

			getDocs(queryCollectionFilter)
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
		} else {

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
		}

		// getFetch()
		// 	.then((res) => {
		// 		// setProducts(res);
		// 	})
		// 	.catch((e) => setError(true))
		// 	.finally(() => setLoading(false));

		// const queryItem = doc(db, "productos", "ESjfHQtNqewACinWpI2I");
		// getDoc(queryItem) //promesa
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
