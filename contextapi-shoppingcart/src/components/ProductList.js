import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductContext from "../store/ProductContext";

const ProductList = () => {
	const { products, setProducts } = useContext(ProductContext);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					"https://fakestoreapi.com/products"
				);
				setProducts(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		getProducts();
	}, []);

	return (
		<section className="max-w-full text-center pr-10 pl-10">
			<ProductCard products={products} />
		</section>
	);
};

export default ProductList;
