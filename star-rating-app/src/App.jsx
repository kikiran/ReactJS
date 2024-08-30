
import './App.css'
import StarCard from './StarCard';

function App() {

  return (
		<div className="font-mono flex flex-col justify-center items-center p-4 bg-blue-300 h-screen w-full">
			<h1 className="text-3xl font-bold text-black mb-5">Star Rating Card</h1>
			<StarCard />
		</div>
  );
}

export default App
