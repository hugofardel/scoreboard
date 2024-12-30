import { useGameActions } from "../hook/useGameActions.js";
import { Table, TableCell, TableContainer, TableRow, THead, TRHeader } from "../ui/Table.jsx";

const HistoryTable = () => {
	const { players, rounds } = useGameActions();

	return (
		<TableContainer>
			<Table>
				<THead>
					<TRHeader>
						<TableCell>Manches</TableCell>
						{players.map((player) => (
							<TableCell key={player.id}>{player.name}</TableCell>
						))}
					</TRHeader>
				</THead>
				<tbody>
					{Array.from({ length: rounds + 1 }).map((_, roundIndex) => (
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
				</tbody>
			</Table>
		</TableContainer>
	);
};

export default HistoryTable;