import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductContext from "./store/ProductContext";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	const [products, setProducts] = useState([]);
	const [cartProducts, setCartProducts] = useState([]);
	const [showModel, setShowModel] = useState(false);

	const ctxValue = {
		products,
		setProducts,
		cartProducts,
		setCartProducts,
		showModel,
		setShowModel,
	};
	return (
		<ProductContext.Provider value={ctxValue}>
			<main>
				<Header />
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
		</ProductContext.Provider>
	);
}

export default App;
