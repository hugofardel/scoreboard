import { useGameActions } from "../hooks/useGameActions";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Th } from "../ui/Table";

const HistoryTable = () => {
	const { players, rounds, status } = useGameActions();

	const ROUNDS_DISPLAY = status === "FINISHED" ? rounds + 1 : rounds;

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<Th>Manches</Th>
						{players.map((player) => (
							<Th key={player.id}>{player.name}</Th>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{Array.from({ length: ROUNDS_DISPLAY }).map((_, roundIndex) => (
						<TableRow key={roundIndex}>
							<TableCell>{roundIndex + 1}</TableCell>
							{players.map((player) => (
								<TableCell key={player.id + "_" + roundIndex}>{player.scores[roundIndex]}</TableCell>
							))}
						</TableRow>
					))}

					<TableRow>
						<TableCell>
							<b>Total</b>
						</TableCell>
						{players.map((player) => (
							<TableCell key={player.id}>
								<b>{player.totalScore}</b>
							</TableCell>
						))}
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default HistoryTable;
