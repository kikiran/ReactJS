import React from 'react'
import MenutItem from './MenutItem'

const MenuList = ({menu}) => {
    console.log('menu', menu);
  return (
		<ul class="space-y-4 text-gray-500 p-6 dark:text-gray-400">
			{menu?.map((item, index) => (
				<MenutItem {...item} key={index} />
			))}
		</ul>
  );
}

export default MenuList
