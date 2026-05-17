import { Button } from "@/components/ui/button";
import PlayerTag from "@/ui/PlayerTag";
import { useNavigate } from "react-router-dom";
import AddPlayerField from "../components/AddPlayerField";
import { COLORS } from "../helpers";
import { useGameActions } from "../hooks/useGameActions";

const SettingUpView = () => {
	const navigate = useNavigate();
	const { players, addPlayer, removePlayer, changeStatus } = useGameActions();

	function handleValid() {
		changeStatus("PLAYING");
		navigate("/leaderboard");
	}

	return (
		<div className="flex flex-col gap-3.5 max-w-7xl p-4 mx-auto text-center">
			<div className="text-2xl my-2 text-foreground">Ajouter les joueurs !</div>
			<AddPlayerField addNewPlayer={addPlayer} />

			<div className="flex gap-1 items-start justify-start flex-wrap max-w-max my-0">
				{players.map((player, index) => (
					<PlayerTag.Root key={player.id} color={COLORS[index]}>
						<PlayerTag.Name>{player.name}</PlayerTag.Name>
						<PlayerTag.Delete onClick={() => removePlayer(player.id)} />
					</PlayerTag.Root>
				))}
			</div>

			<Button className="p-6 text-lg" disabled={!players.length} onClick={handleValid}>
				Commencer la partie
			</Button>
		</div>
	);
};

export default SettingUpView;
