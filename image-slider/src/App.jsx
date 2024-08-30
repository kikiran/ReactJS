import { useEffect, useState } from "react";
import "./App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const URL = "https://picsum.photos/v2/list?page=2&limit=10";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentSlider, setCurrentSlider] = useState(0);

	// fetching data
	async function fetchImages(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data) {
				setPosts(data);
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchImages(URL);
	}, []);

	if (loading) {
		return <div>Please wait loading ....</div>;
	}

	// handle next slide
	const handleNext = () => {
		setCurrentSlider(
			currentSlider === posts?.length - 1 ? 0 : currentSlider + 1
		);
	};

	// handle previous slide
	const handlePrev = () => {
		setCurrentSlider(
			currentSlider === 0 ? posts?.length - 1 : currentSlider - 1
		);
	};

	// handle dots on the bottom with currentSlider
	const handleDots = (index) => {
		setCurrentSlider(index);
	};

	return (
		<>
			<h1 className="text-2xl text-center font-serif font-bold text-black mt-5">
				Image Slider
			</h1>
			<div className="flex flex-row p-4 mt-[5%] w-1/2 h-96 justify-center mx-auto  items-center relative ">
				<button
					className="bg-white rounded-full w-8 h-8 absolute left-1 z-10 flex items-center justify-center"
					onClick={handlePrev}
				>
					<FaArrowLeft />
				</button>
				{posts.length > 0 &&
					posts?.map((post, index) => (
						<img
							src={post.download_url}
							alt="noimages"
							className={` ${
								currentSlider === index
									? "absolute rounded-md"
									: "hidden"
							}`}
						/>
					))}
				<button
					className="bg-white rounded-full w-8 h-8 absolute right-1 flex items-center justify-center"
					onClick={handleNext}
				>
					<FaArrowRight />
				</button>
			</div>
			<div className="flex items-center justify-center gap-2">
				{posts.length > 0 &&
					posts?.map((_, index) => (
						<button
							className={` rounded-full w-3 h-3 relative ${
								currentSlider === index
									? "bg-yellow-300"
									: "bg-gray-200"
							}`}
							onClick={() => handleDots(index)}
						></button>
					))}
			</div>
		</>
	);
}

export default App;
