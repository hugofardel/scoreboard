import { useGameActions } from "../hooks/useGameActions";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Th, Trophy } from "../ui/Table";

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
				<TableHead>
					<TableRow>
						<Th>Position</Th>
						<Th>Nom du joueur</Th>
						<Th>Victoires</Th>
						<Th>Points</Th>
					</TableRow>
				</TableHead>
				<TableBody>
					{ranking.map((player, playerIndex) => (
						<TableRow key={playerIndex}>
							<TableCell>
								<Trophy position={playerIndex + 1} />
							</TableCell>
							<TableCell>{player.name}</TableCell>
							<TableCell>{player.victories}</TableCell>
							<TableCell>{player.totalScore}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default LeaderboardTable;
