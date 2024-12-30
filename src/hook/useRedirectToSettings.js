import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameActions } from "./useGameActions.js";

export function useRedirectToSettings() {
	const navigate = useNavigate();
	const { players } = useGameActions();

	useEffect(() => {
		if (!players?.length) {
			console.warn("No players found, redirecting to '/'");
			navigate("/");
		}
	}, [navigate, players]);
}
