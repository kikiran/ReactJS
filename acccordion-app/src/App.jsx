import './App.css'
import Accordion from './assets/components/Accordion';

function App() {

  return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold text-center p-2">
				Accordion App
			</h1>
			<Accordion />
		</div>
  );
}

export default App
