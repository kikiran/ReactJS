import React, { useState } from "react";
const data = [
	{
		id: 1,
		title: "Introduction to JavaScript",
		content:
			"JavaScript is a versatile programming language that is widely used in web development. It enables interactive web pages and is an essential part of the web applications stack, along with HTML and CSS.",
	},
	{
		id: 2,
		title: "JavaScript Basics",
		content:
			"JavaScript is a high-level, interpreted language that allows you to add dynamic behavior to websites. Basic concepts include variables, data types, operators, functions, and events.",
	},
	{
		id: 3,
		title: "Advanced JavaScript Concepts",
		content:
			"Advanced concepts in JavaScript include asynchronous programming with promises and async/await, closures, and the prototype chain. Understanding these concepts can help you write more efficient and scalable code.",
	},
];

const Accordion = () => {
	const [selectedId, setSelectedId] = useState(0);
	const [multiExpand, setMultiExpand] = useState(false);
	const [multiSelecteId, setMultiSelecteId] = useState([]);

	const handleExpand = (id) => {
		setSelectedId(id);
	};

	const handleMultiExpand = () => {
		setMultiExpand((multiExpand) => !multiExpand);
	};

	const handleMultiSelection = (currentId) => {
		const copySelection = [...multiSelecteId];
		const findCurrentIndexId = copySelection.indexOf(currentId);
		findCurrentIndexId == -1
			? copySelection.push(currentId)
			: copySelection.splice(findCurrentIndexId, 1);
		setMultiSelecteId(copySelection);
	};

	return (
		<div className="w-1/2 pt-3">
			<button
				onClick={handleMultiExpand}
				className="p-4 bg-blue-400 rounded-md text-white font-bold"
			>
				Multi Selection
			</button>
			{data?.map((accordion, index) => (
				<div className="m-2 " key={index}>
					<div className="bg-blue-300 p-4 flex rounded-md flex-row justify-between items-center">
						<h1>{accordion.title}</h1>
						{selectedId == accordion.id ||
						multiSelecteId.indexOf(accordion.id) !== -1 ? (
							<img
								src="/minus.png"
								alt="plusicon"
								className="w-10 h-10 cursor-pointer"
								onClick={() =>
									multiExpand
										? handleMultiSelection(accordion.id)
										: handleExpand(accordion.id)
								}
							/>
						) : (
							<img
								src="/plus.svg"
								alt="plusicon"
								className="w-10 h-10 cursor-pointer"
								onClick={() =>
									multiExpand
										? handleMultiSelection(accordion.id)
										: handleExpand(accordion.id)
								}
							/>
						)}
					</div>
					{selectedId === accordion.id ||
					multiSelecteId.indexOf(accordion.id) !== -1 ? (
						<div className="border border-1 p-4  bg-gray-300">
							<p>{accordion.content}</p>
						</div>
					) : null}
				</div>
			))}
		</div>
	);
};

export default Accordion;
