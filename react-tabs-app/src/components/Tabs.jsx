import React, { useState, useRef, useEffect } from "react";

const Tabs = ({ data }) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const firstRef = useRef();

	const handleTabClick = (index) => {
		setSelectedTab(index);
	};

	useEffect(() => {
		firstRef.current.focus();
	}, []);

	return (
		<>
			<div className="bg-sky-100 flex justify-center items-center py-12 pt-2 mt-4 ">
				<div className="max-w-4xl flex flex-col gap-2 w-full ">
					<div className="bg-blue-400 p-2 flex justify-between items-center gap-2 font-bold">
						{data.map((item, index) => (
							<button
								className="outline-none flex text-white"
								onClick={() => handleTabClick(index)}
								key={index}
								ref={index === 0 ? firstRef : null}
							>
								{item.title}
							</button>
						))}
					</div>
					<div>
						{data.map((item, index) => (
							<p
								className={`  p-2 ${
									selectedTab === index ? "" : "hidden"
								}`}
								key={index}
							>
								{item.desc}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs;
