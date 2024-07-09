import React, { useContext, useState } from "react";
import ProductContext from "../store/ProductContext";

const ProductCard = ({ products }) => {
	const { cartProducts, setCartProducts } = useContext(ProductContext);

	const addProductToCart = (product) => {
		setCartProducts([product, ...cartProducts]);
	};

	return (
		<section className="flex flex-row justify-between flex-wrap gap-5 mt-10 pb-5">
			{products.map((product, index) => (
				<div
					key={index}
					className="w-60 h-100 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
				>
					<img
						className="h-40 w-60 rounded-t-lg object-cover"
						src={product?.image}
						alt="product image"
					/>
					<div className="px-5 pb-5">
						<h5 className="text-xl pb-5 font-semibold tracking-tight text-gray-900 dark:text-white truncate">
							{product.title}
						</h5>

						<div className="flex items-center justify-between">
							<span className="text-sm font-bold text-gray-900 dark:text-white">
								${product.price}
							</span>
							<a
								href="#"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={() => addProductToCart(product)}
							>
								Add to cart
							</a>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default ProductCard;
