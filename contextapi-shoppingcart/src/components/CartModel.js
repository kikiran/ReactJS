import React, { useContext } from "react";
import ProductContext from "../store/ProductContext";

const CartModel = () => {
	const { showModel, setShowModel, cartProducts, setCartProducts } =
		useContext(ProductContext);

	const handleRemoveProduct = (id) => {
		const copyProducts = [...cartProducts];
		const updatedProduct = copyProducts.filter(
			(product) => product.id !== id
		);
		setCartProducts(updatedProduct);
		updatedProduct?.length <= 0 && setShowModel(false);
	};

	return showModel ? (
		<div className="bg-slate-100 fixed  w-full h-full overflow-hidden mt-10">
			<div className="bg-sky-400 h-10 p-2 text-white font-bold flex flex-row justify-between max-w-3xl  m-auto">
				<h1>Check out</h1>
				<button onClick={() => setShowModel(false)}>X</button>
			</div>
			<div className="bg-white  p-5 max-w-3xl  m-auto ">
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Product name
								</th>

								<th scope="col" className="px-6 py-3">
									Category
								</th>
								<th scope="col" className="px-6 py-3">
									Rating
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									QTY
								</th>
							</tr>
						</thead>
						{cartProducts && cartProducts?.length > 0
							? cartProducts?.map((product, index) => (
									<tbody key={product.id}>
										<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 truncate">
											<td
												scope="row"
												className="px-6 py-4 font-medium text-gray-900 whitespace-normal  dark:text-white truncate"
											>
												{product.title}
											</td>
											<td className="px-6 py-4">
												{product.category}
											</td>
											<td className="px-6 py-4">
												{product?.rating?.rate}
											</td>

											<td className="px-6 py-4">
												${product.price}
											</td>
											<td class="px-6 py-4">
												<button
													onClick={() =>
														handleRemoveProduct(
															product?.id
														)
													}
													className="bg-sky-500 rounded-xl p-2 text-white hover:bg-red-400"
												>
													Remove
												</button>
											</td>
										</tr>
									</tbody>
							  ))
							: null}
					</table>
				</div>
			</div>
		</div>
	) : null;
};

export default CartModel;
