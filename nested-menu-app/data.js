
	const Menu = [
		{
			title: "Home",
			url: "/home",
		},
		{
			title: "About",
			url: "/about",
		},
		{
			title: "Services",
			url: "/services",
			submenu: [
				{
					title: "Web Development",
					url: "/services/web-development",
					submenu: [
						{
							title: "Angular",
							url: "/services/web-development/ios",
						},
						{
							title: "Vue",
							url: "/services/web-development/vue",
						},
						{
							title: "React",
							url: "/services/web-development/react",
							submenu: [
						{
							title: "React Native",
							url: "/services/web-development/ios",
						}]
						}
					],
				},
				{
					title: "App Development",
					url: "/services/app-development",
					submenu: [
						{
							title: "iOS",
							url: "/services/app-development/ios",
						},
						{
							title: "Android",
							url: "/services/app-development/android",
						},
					],
				},
				{
					title: "SEO",
					url: "/services/seo",
				},
			],
		},
		{
			title: "Contact",
			url: "/contact",
		},
	];

	export default Menu;
