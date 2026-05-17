import type { ItemScore } from "@/components/RoundForm";
import type { Player } from "./player";

export type GameStatus = "SETTING_UP" | "PLAYING" | "FINISHED";

export type GameState = {
	players: Player[];
	wins: string[];
	rounds: number;
	status: GameStatus;
};

export type GameAction =
	| {
			type: "ADD_PLAYER";
			payload: {
				name: string;
			};
	  }
	| {
			type: "REMOVE_PLAYER";
			payload: {
				id: string;
			};
	  }
	| {
			type: "CHANGE_STATUS";
			payload: {
				status: GameStatus;
			};
	  }
	| {
			type: "ADD_ROUND";
	  }
	| {
			type: "UPDATE_SCORE";
			payload: {
				playerId: string;
				roundIndex: number;
				score: number;
			};
	  }
	| {
			type: "UPDATE_SCORES_ROUND";
			payload: {
				scores: ItemScore[];
			};
	  }
	| {
			type: "WINNER_ROUND";
			payload: {
				playerId: string;
			};
	  }
	| {
			type: "RESET";
	  };
