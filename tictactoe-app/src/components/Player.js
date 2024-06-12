import React, { useState } from "react";

const Player = ({ initialName, icon , isActive}) => {
	const [isEditable, setIsEditable] = useState(false);
	const [playerName, setPlayterName] = useState(initialName);

	const handleEditable = () => {
		setIsEditable((isEditable) => !isEditable);
	};

	const onChangehandler = (e) => {
		setPlayterName(e.target.value)
	}
	return (
		<li id="player" className={isActive ? 'active' : undefined}>
			<span>
				<span>
					{isEditable ? (
						<span>
							<input
								type="text"
								value={playerName}
								onChange={onChangehandler}
								required
							/>
						</span>
					) : (
						<span>{playerName}</span>
					)}
				</span>
				&nbsp;&nbsp;&nbsp;
				<span>{icon}</span>&nbsp;&nbsp;&nbsp;
			</span>
			<button onClick={handleEditable}>
				{isEditable ? "Save" : "Edit"}
			</button>
		</li>
	);
};

export default Player;
