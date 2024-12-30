import { useState } from "react";
import styled from "styled-components";

import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";

const StyledAddPlayer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 1.5rem;

	@media (max-width: 767px) {
		font-size: 1rem;
	}
`;

const StyledFlexRow = styled.div`
	display: flex;
	gap: 5px;
`;

const AddPlayerField = ({ addNewPlayer }) => {
	const [playerName, setPlayerName] = useState("");

	function addPlayerToList(name) {
		if (name) {
			addNewPlayer(name);
			setPlayerName("");
		}
	}

	function handleKey(e) {
		if (e.key === "Enter") {
			addPlayerToList(e.target.value);
		}
	}

	return (
		<StyledAddPlayer>
			<StyledFlexRow>
				<Input
					type="text"
					id="input-name"
					placeholder="Nom du joueur"
					value={playerName}
					onKeyUp={handleKey}
					onChange={(e) => setPlayerName(e.target.value)}
				/>
				<Button onClick={() => addPlayerToList(playerName)} disabled={!playerName}>
					Ajouter
				</Button>
			</StyledFlexRow>
		</StyledAddPlayer>
	);
};

export default AddPlayerField;
