import { useGameActions } from "../hook/useGameActions.js";
import PlayersList from "../components/PlayersList.jsx";
import PlayerTag from "../components/PlayerTag.jsx";
import Button from "../ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddPlayerField from "../components/AddPlayerField.jsx";
import { COLORS } from "../helpers.js";

const StyledSettingUpView = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 1220px;
	padding-top: 10rem;
	margin: 0 auto;
	text-align: center;
`;

const Title = styled.div`
	font-size: 2.5rem;
	margin: 1.5rem 0;
	color: var(--btn-color);
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
			<Title>Ajouter les joueurs !</Title>

			<AddPlayerField addNewPlayer={addPlayer} />
			<PlayersList>
				{players.map((player, index) => (
					<PlayerTag
						key={player.id}
						colors={COLORS[index]}
						name={player.name}
						showDelete={true}
						onDelete={() => removePlayer(player.id)}
					/>
				))}
			</PlayersList>

			<Button size="large" disabled={!players.length} onClick={handleValid}>
				Commencer la partie
			</Button>
		</StyledSettingUpView>
	);
};

export default SettingUpView;
