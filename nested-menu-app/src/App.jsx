import Menu from "../data";
import MenuList from "./components/MenuList";


function App() {
	

	return (
		<div className="w-64 h-screen bg-blue-300">
			<MenuList menu={Menu} />
		</div>
	);
}

export default App;
