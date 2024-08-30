import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarCard = ({ numStars = 5 }) => {
	const [rating, setRating] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setRating(index);
	};
	const handleMouseMove = (index) => {
		setCurrentIndex(index);
	};
	const handleMouseLeave = (index) => {
		setCurrentIndex(rating);
	};

	return (
		<div className="flex w-96 h-auto p-4  bg-black rounded-md shadow-md ">
			<div className="top-0">
				<img
					src="https://cdn.europosters.eu/image/hp/66923.jpg"
					alt="movie"
					className="rounded-t-md h-36 w-full object-cover"
				/>
				<h1 className="text-2xl text-white font-bold font-serif p-4">
					Batman Dark Knight
				</h1>
				<div className="p-4 mb-1 flex flex-row gap-3 items-center ">
					<span className="text-white ">Rating: </span>
					<span className="text-white flex flex-row gap-2">
						{[...Array(numStars)].map((_, i) => {
							const index = i + 1;
							return (
								<FaStar
									key={index}
									onClick={() => handleClick(index)}
									onMouseMove={() => handleMouseMove(index)}
									onMouseLeave={() => handleMouseLeave(index)}
									className={`${
										index <= (currentIndex || rating)
											? "text-yellow-500"
											: "text-grey-500"
									}  cursor-pointer`}
								/>
							);
						})}
					</span>
				</div>
				{rating && rating?.length !== 0 ? (
					<div className="p-4">
						<button className="bg-[#424242] p-2  rounded-md">
							<span className="text-white flex flex-row gap-4 items-center">
								Your Rating: {rating} / {numStars}
								<FaStar className="text-yellow-500" />
							</span>
						</button>
					</div>
				) : null}

				<div className="flex justify-center items-end bottom-0 ">
					<button className="bg-[#424242] p-3 w-auto h-10 rounded-md text-[#BF2EF0] font-bold">
						+ Watch Options
					</button>
				</div>
			</div>
		</div>
	);
};

export default StarCard;
