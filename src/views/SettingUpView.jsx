import { useGameActions } from "../hook/useGameActions.js";
import PlayersList from "../components/PlayersList.jsx";
import PlayerTag from "../components/PlayerTag.jsx";
import Button from "../ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddPlayerField from "../components/AddPlayerField.jsx";

const StyledSettingUpView = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 1220px;
	min-height: 100vh;
	padding-top: 10rem;
	margin: 0 auto;
	text-align: center;
`;

const SettingUpView = () => {
	const navigate = useNavigate();
	const { players, addPlayer, removePlayer, changeStatus, addRound } = useGameActions();

	function handleValid() {
		changeStatus("PLAYING");
		addRound();
		navigate("/leaderboard");
	}

	return (
		<StyledSettingUpView>
			<AddPlayerField addNewPlayer={addPlayer} />
			<PlayersList>
				{players.map((player) => (
					<PlayerTag key={player.id} name={player.name} showDelete={true} onDelete={() => removePlayer(player.id)} />
				))}
			</PlayersList>

			<Button size="large" disabled={!players.length} onClick={handleValid}>
				Commencer la partie
			</Button>
		</StyledSettingUpView>
	);
};

export default SettingUpView;
