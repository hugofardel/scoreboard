import { FaTrophy } from "react-icons/fa";
import { useGameActions } from "../hook/useGameActions.js";
import { TableContainer, Table, TableCell, TableRow, THead, TRHeader, TrophyCell } from "../ui/Table.jsx";

const LeaderboardTable = () => {
	const { players, wins } = useGameActions();

	const playersWithVictories = [...players].map((player) => {
		return { ...player, victories: wins.filter((winnerId) => winnerId === player.id).length };
	});

	const ranking = [...playersWithVictories].sort((a, b) => {
		return a.totalScore - b.totalScore;
	});

	return (
		<TableContainer>
			<Table>
				<THead>
					<TRHeader>
						<TableCell>Position</TableCell>
						<TableCell>Nom du joueur</TableCell>
						<TableCell>Victoires</TableCell>
						<TableCell>Points</TableCell>
					</TRHeader>
				</THead>
				<tbody>
					{ranking.map((player, playerIndex) => (
						<TableRow key={playerIndex}>
							<TrophyCell position={playerIndex + 1}>
								<FaTrophy /> {playerIndex + 1} {/* Place avec l'icône de trophée */}
							</TrophyCell>
							<TableCell>{player.name}</TableCell>
							<TableCell>{player.victories}</TableCell>
							<TableCell>{player.totalScore}</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</TableContainer>
	);
};

export default LeaderboardTable;
