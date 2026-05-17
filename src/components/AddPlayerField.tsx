import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Input } from "./ui/input";

interface Props {
	addNewPlayer: (name: string) => void;
}

const AddPlayerField = ({ addNewPlayer }: Props) => {
	const [playerName, setPlayerName] = useState("");

	function addPlayerToList(name: string) {
		if (name) {
			addNewPlayer(name);
			setPlayerName("");
		}
	}

	function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			addPlayerToList(e.currentTarget.value);
		}
	}

	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex gap-2 items-center w-full">
				<Input
					type="text"
					id="input-name"
					placeholder="Nom du joueur"
					className="h-12 py-2 text-lg! flex-1"
					value={playerName}
					onKeyUp={handleKey}
					onChange={(e) => setPlayerName(e.target.value)}
				/>

				<Button className="h-12 flex items-center" onClick={() => addPlayerToList(playerName)} disabled={!playerName}>
					<FaPlus />
				</Button>
			</div>
		</div>
	);
};

export default AddPlayerField;
