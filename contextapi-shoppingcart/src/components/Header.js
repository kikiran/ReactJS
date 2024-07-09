import React, { useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductContext from "../store/ProductContext";
import CartModel from "./CartModel";

const Header = () => {
	const { cartProducts, setShowModel } = useContext(ProductContext);
	const handleShowModel = () => {
		cartProducts?.length > 0 && setShowModel(true);
	};

	return (
		<>
			<div className="w-full bg-blue-400 p-2 text-white flex flex-row justify-between font-bold items-center ">
				<ul className="flex flex-row gap-10 ">
					<li className="hover:text-sky-700 cursor-pointer">
						<Link to="/">Shop</Link>
					</li>
					<li className="hover:text-sky-700 cursor-pointer">
						<Link to="/about">About</Link>
					</li>
					<li className="hover:text-sky-700 cursor-pointer">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<h3 className="text-3xl font-bold text-center">Alameda</h3>
				<ul className="flex flex-row gap-10">
					<li className="hover:text-sky-700 cursor-pointer">
						<FaInstagram />
					</li>
					<li className="hover:text-sky-700 cursor-pointer">
						<FaXTwitter />
					</li>
					<li
						className="hover:text-sky-700 cursor-pointer flex flex-row"
						onClick={handleShowModel}
					>
						<span className="text-yellow-200">
							{cartProducts &&
								cartProducts?.length > 0 &&
								cartProducts?.length}
						</span>

						<FaShoppingCart />
					</li>
				</ul>
			</div>
			<CartModel />
		</>
	);
};

export default Header;
