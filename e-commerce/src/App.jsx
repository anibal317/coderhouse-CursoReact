import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
	return (
		<BrowserRouter className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Counter />
		</BrowserRouter>
	);
}

export default App;
