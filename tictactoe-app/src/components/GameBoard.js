import React, { useState } from 'react';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ handleActivePlayer, activePlayerIcon }) => {
	const [gameBoard, setGameBoard] = useState(initialBoard);

	const handleGameBoard = (rowIndex, colIndex) => {
		setGameBoard((prevGameBoard) => {
			console.log(prevGameBoard);
			const updatedBoard = [...prevGameBoard.map((board) => [...board])];
			updatedBoard[rowIndex][colIndex] = activePlayerIcon;
			return updatedBoard;
		});
		handleActivePlayer();
	};
	return (
		<ol id="game-board">
			{gameBoard.map((item, rowIndex) => (
				<li key={rowIndex} >
					<ol>
						{item.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() =>
										handleGameBoard(rowIndex, colIndex)
									}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard
