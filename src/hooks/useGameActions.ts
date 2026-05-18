import type { GameStatus } from "@/types/game";
import { useGame } from "../contexts/GameContext";
import type { ItemScore } from "@/components/RoundForm";

export const useGameActions = () => {
	const { state, dispatch } = useGame();

	function addPlayer(name: string) {
		dispatch({ type: "ADD_PLAYER", payload: { name } });
	}

	function removePlayer(id: string) {
		dispatch({ type: "REMOVE_PLAYER", payload: { id } });
	}

	function changeStatus(status: GameStatus) {
		dispatch({ type: "CHANGE_STATUS", payload: { status } });
	}

	function updateScoresRound(scores: ItemScore[]) {
		dispatch({ type: "UPDATE_SCORES_ROUND", payload: { scores } });
	}

	function updateWinnerRound(playerId: string) {
		dispatch({ type: "WINNER_ROUND", payload: { playerId } });
	}

	function retry() {
		dispatch({ type: "RESET" });
	}

	return {
		players: state.players,
		rounds: state.rounds,
		status: state.status,
		wins: state.wins,
		addPlayer,
		removePlayer,
		changeStatus,
		updateScoresRound,
		updateWinnerRound,
		retry,
	};
};
