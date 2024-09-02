import React, { useState } from 'react'
import MenuList from './MenuList';

const MenutItem = (items) => {
	const [expand, setExpand] = useState({});

	const handleClick = (title) => {
		setExpand({
			...expand,
			[title]:!expand[title]
		});
	}

  return (
		<>
			<li>
				<span
					className="flex flex-row gap-3 items-center"
					onClick={() => handleClick(items.title)}
				>
					{expand[items.title] ? (
						<img
							src="/minus.svg"
							alt="noimage"
							className="h-4 w-4"
						/>
					) : (
						<img
							src="/tick.svg"
							alt="noimage"
							className="h-4 w-4"
						/>
					)}
					{items.title}
				</span>

				{expand ? (
					items?.submenu &&
					items?.submenu.length > 0 &&
					expand[items.title] ? (
						<MenuList menu={items?.submenu} />
					) : null
				) : null}
			</li>
		</>
  );
}

export default MenutItem
