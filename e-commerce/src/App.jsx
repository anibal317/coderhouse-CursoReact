import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CartContextProvider from "./contexts/cartContext";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
					<Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
