import React from "react";

const Card = ({ img, title }) => {
	return (
		<div className="w-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img
					className="p-1 rounded-t-sm object-cover w-24 h-24"
					src={img}
					alt="product image"
				/>
			</a>
			<div className="px-2">
				<a href="#">
					<h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">
						{title}
					</h5>
				</a>
			</div>
		</div>
	);
};

export default Card;
