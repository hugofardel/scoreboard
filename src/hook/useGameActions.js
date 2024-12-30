import { useGame } from "../contexts/GameContext.jsx";

export const useGameActions = () => {
	const { state, dispatch } = useGame();

	function addPlayer(name) {
		dispatch({ type: "ADD_PLAYER", payload: { name } });
	}

	function removePlayer(id) {
		dispatch({ type: "REMOVE_PLAYER", payload: { id } });
	}

	function changeStatus(status) {
		dispatch({ type: "CHANGE_STATUS", payload: { status } });
	}

	function addRound() {
		dispatch({ type: "ADD_ROUND" });
	}

	function updateScore(playerId, roundIndex, score) {
		dispatch({ type: "UPDATE_SCORE", payload: { roundIndex, playerId, score } });
	}

	function updateWinnerRound(playerId, roundIndex) {
		dispatch({ type: "WINNER_ROUND", payload: { playerId, roundIndex } });
	}

	return {
		players: state.players,
		rounds: state.rounds,
		status: state.status,
		wins: state.wins,
		addPlayer,
		removePlayer,
		changeStatus,
		addRound,
		updateScore,
		updateWinnerRound,
	};
};
