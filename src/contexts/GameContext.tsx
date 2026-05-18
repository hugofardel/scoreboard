import type { GameAction, GameState } from "@/types/game";
import type { Player } from "@/types/player";
import { createContext, useContext, useReducer } from "react";

// initial state
const initialState: GameState = {
	players: [],
	wins: [],
	rounds: 0,
	status: "SETTING_UP",
};

function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case "ADD_PLAYER":
			return {
				...state,
				players: [...state.players, { id: Date.now().toString(), name: action.payload.name, totalScore: 0, scores: [] }],
			};

		case "REMOVE_PLAYER":
			return {
				...state,
				players: state.players.filter((player: Player) => player.id !== action.payload.id),
			};

		case "CHANGE_STATUS":
			return {
				...state,
				status: action.payload.status,
			};

		case "UPDATE_SCORES_ROUND": {
			const { scores } = action.payload;

			return {
				...state,
				rounds: state.rounds + 1,
				players: state.players.map((player) => {
					const score = scores.find((s) => s.id === player.id);
					if (!score) return player;

					const nextScores = [...player.scores];
					nextScores.push(score.value);

					return {
						...player,
						scores: nextScores,
						totalScore: player.totalScore + score.value,
					};
				})
			}
		}

		case "WINNER_ROUND": {
			const wins = state.wins;
			wins[state.rounds] = action.payload.playerId;

			return {
				...state,
				wins: wins,
			};
		}

		case "RESET": {
			return {
				...initialState,
				players: state.players.map((p) => {
					return { ...p, scores: [], totalScore: 0 }
				}),
				status: "PLAYING",
				rounds: 0,
				wins: []
			}
		}

		default:
			throw new Error(`Unknown action`);
	}
}

type GameContextType = {
	state: GameState;
	dispatch: React.Dispatch<GameAction>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

function GameProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

function useGame() {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error("useGame doit être utilisé dans un GameProvider");
	}
	return context;
}

export { GameProvider, useGame };

