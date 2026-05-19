import { cn } from "@/lib/utils";
import { FaTrophy } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
	playerName: string;
	handleClickWinner: () => void;
	isWinner: boolean;
	currentScore: number;
	handleCurrentScore: (value: string) => void;
}

const PlayerScoreRound = ({ currentScore, playerName, handleClickWinner, handleCurrentScore, isWinner }: Props) => {

	return (
		<li
			className={cn("flex items-center justify-between gap-4 w-full p-2 my-3 rounded-md border-border border",
				isWinner && "border-accent text-accent"
			)}>
			<div className="truncate shrink-0 max-w-20">{playerName}</div>

			<div className="flex flex-row gap-2">
				<Input
					type="number"
					inputMode="numeric"
					placeholder="points"
					disabled={isWinner}
					value={currentScore}
					onChange={(e) => handleCurrentScore(e.target.value)}
					onFocus={(e) => e.target.select()}
				/>
				<Button
					size="sm"
					variant="outline"
					className={isWinner ? "border-accent border" : ""}
					disabled={isWinner}
					onClick={handleClickWinner}
				>
					<FaTrophy />
				</Button>
			</div>
		</li>
	);
};

export default PlayerScoreRound;