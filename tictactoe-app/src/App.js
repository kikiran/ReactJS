import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
	const [activePlayer, setActivePlayer] = useState('X');

	const handleActivePlayer = () => {
		setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
	}
  return (
		<div id="game-container">
			<main>
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						icon="X"
						isActive={activePlayer === "X"}
					/>
					<Player
						initialName="Player 2"
						icon="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
			</main>
			<GameBoard
				handleActivePlayer={handleActivePlayer}
				activePlayerIcon={activePlayer}
			/>
		</div>
  );
}

export default App;
