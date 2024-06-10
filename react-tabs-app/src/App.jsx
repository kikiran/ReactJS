import { useState } from "react";
import Logo from "./assets/react.svg";
import BMW from "./assets/b1.jpg";
import DUKE from "./assets/b2.jpg";
import YAMAHA from "./assets/b3.jpg";
import ROYALENGFIELD from "./assets/b4.jpg";
import "./App.css";
import Card from "./components/Card";
import Tabs from "./components/Tabs";

const Bikes = [
	{
		title: "BMW",
		img: BMW,
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan quam sed urna rhoncus, in ornare velit vestibulum. Integer eu elit ultrices, lobortis nisl sed, vehicula ex. Nam convallis eget arcu vulputate tristique.",
	},
	{
		title: "DUKE",
		img: DUKE,
		desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
	},
	{
		title: "YAMAHA",
		img: YAMAHA,
		desc: "React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
	},
	{
		title: "ENFIELD",
		img: ROYALENGFIELD,
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan quam sed urna rhoncus, in ornare velit vestibulum. Integer eu elit ultrices, lobortis nisl sed, vehicula ex. Nam convallis eget arcu vulputate tristique.",
	},
];

function App() {
	return (
		<>
			<main>
				<div className="flex  flex-col items-center justify-center gap-3">
					<img src={Logo} alt="logo" height={50} width={50} />
					<h1 className="text-3xl font-bold justify-between text-cyan-500">
						React Tabs App
					</h1>
				</div>
				<div className="flex flex-row justify-evenly mt-2">
					{Bikes.map(({ img, title }, index) => (
						<Card img={img} title={title} key={index} />
					))}
				</div>
				<div className="tabs-section">
					<Tabs data={Bikes} />
				</div>
			</main>
		</>
	);
}

export default App;
