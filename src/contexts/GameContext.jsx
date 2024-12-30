import { createContext, useContext, useReducer } from "react";

// SETTING_UP
// PLAYING
// END

// initial state
const initialState = {
	players: [],
	wins: [],
	rounds: -1,
	status: "SETTING_UP", // utile ??
};

// actions
const ADD_PLAYER = "ADD_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";
const CHANGE_STATUS = "CHANGE_STATUS";
const ADD_ROUND = "ADD_ROUND";
const UPDATE_SCORE = "UPDATE_SCORE";
const WINNER_ROUND = "WINNER_ROUND";

function gameReducer(state, action) {
	switch (action.type) {
		case ADD_PLAYER:
			return {
				...state,
				players: [...state.players, { id: Date.now(), name: action.payload.name, totalScore: 0, scores: [] }],
			};

		case REMOVE_PLAYER:
			return {
				...state,
				players: state.players.filter((player) => player.id !== action.payload.id),
			};

		case CHANGE_STATUS:
			return {
				...state,
				status: action.payload.status,
			};

		case ADD_ROUND:
			return {
				...state,
				rounds: state.rounds + 1,
				players: state.players.map((player) => ({
					...player,
					scores: [...player.scores, 0],
				})),
			};

		case UPDATE_SCORE: {
			const { playerId, roundIndex, score } = action.payload;
			return {
				...state,
				players: state.players.map((player) =>
					player.id === playerId
						? {
								...player,
								scores: player.scores.map((s, index) => (index === roundIndex ? score : s)),
								totalScore: player.scores.reduce((sum, s, index) => (index === roundIndex ? sum + score : sum + s), 0),
						  }
						: player
				),
			};
		}

		case WINNER_ROUND: {
			const wins = state.wins;
			wins[action.payload.roundIndex] = action.payload.playerId;

			return {
				...state,
				wins: wins,
			};
		}

		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
}

const GameContext = createContext();

function GameProvider({ children }) {
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
