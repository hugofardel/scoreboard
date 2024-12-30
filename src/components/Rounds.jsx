import styled from "styled-components";
import { useGameActions } from "../hook/useGameActions.js";
import Button from "../ui/Button.jsx";
import PlayerScoreRound from "./PlayerScoreRound.jsx";
import { useState } from "react";
import ButtonGroup from "../ui/ButtonGroup.jsx";

const Title = styled.div`
	font-size: 1.8rem;
	color: var(--btn-color);
	font-weight: 700;
	margin-bottom: 2rem;
`;

const Rounds = () => {
	const { players, rounds, addRound, updateScore, changeStatus, updateWinnerRound } = useGameActions();
	const [winner, setWinner] = useState();

	function handleClickWinner(playerId, roundIndex) {
		setWinner(playerId);
		updateScore(playerId, rounds, 0);
		updateWinnerRound(playerId, roundIndex);
	}

	function handleNewRound() {
		addRound();
		setWinner(null);
	}

	function handleEndGame() {
		changeStatus("END");
	}

	return (
		<div>
			<Title>Manche {rounds + 1}</Title>
			<ul>
				{players.map((player) => (
					<PlayerScoreRound
						roundIndex={rounds}
						player={player}
						score={player.scores[rounds]}
						key={player.id}
						isWinner={winner === player.id}
						handleClickWinner={handleClickWinner}
					/>
				))}
			</ul>

			<ButtonGroup>
				<Button onClick={handleNewRound}>Nouvelle Manche</Button>
				<Button onClick={handleEndGame}>Fin de la partie</Button>
			</ButtonGroup>
		</div>
	);
};

export default Rounds;
