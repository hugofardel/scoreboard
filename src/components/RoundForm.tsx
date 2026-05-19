import { useGameActions } from "@/hooks/useGameActions";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PlayerScoreRound from "./PlayerScoreRound";
import { Button } from "./ui/button";

interface Props {
    close: () => void;
}

export type ItemScore = {
    id: string;
    value: number;
}

function RoundForm({ close, className }: React.ComponentProps<"form"> & Props) {
    const { players, updateScoresRound, updateWinnerRound } = useGameActions();
    const [scores, setScores] = useState<ItemScore[]>(players.map((p) => { return { id: p.id, value: 0 } }));
    const [roundWinner, setRoundWinner] = useState<string | undefined>();

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        updateScoresRound(scores);
        roundWinner && updateWinnerRound(roundWinner);
        close();
    }

    function handleClickWinner(playerId: string) {
        setRoundWinner(playerId);
        handleCurrentScore("0", playerId);
    }

    function handleCurrentScore(value: string, playerId: string) {
        const newScores = scores.map((s) => {
            if (s.id === playerId) {
                return { id: s.id, value: Number(value) };
            } else {
                return s;
            }
        });
        setScores(newScores);
    }

    return (
        <form className={cn("grid items-start gap-6 overflow-y-auto", className)} onSubmit={handleSubmit}>
            <ul className="">
                {players.map((player, i) => (
                    <PlayerScoreRound
                        key={player.id}
                        playerName={player.name}
                        currentScore={scores[i].value}
                        handleCurrentScore={(value) => handleCurrentScore(value, player.id)}
                        isWinner={roundWinner === player.id}
                        handleClickWinner={() => handleClickWinner(player.id)}
                    />
                ))}
            </ul>

            <Button type="submit">Valider</Button>
        </form>
    )
}

export default RoundForm;