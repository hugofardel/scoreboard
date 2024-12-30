import LeaderboardTable from "../components/LeaderboardTable.jsx";
import Rounds from "../components/Rounds.jsx";
import Box from "../ui/Box.jsx";
import Row from "../ui/Row.jsx";
import { useGameActions } from "../hook/useGameActions.js";
import { useRedirectToSettings } from "../hook/useRedirectToSettings.js";

const LeaderboardView = () => {
	const { status } = useGameActions();
	useRedirectToSettings();

	return (
		<Row type="horizontal">
			<Box flex={4}>
				<LeaderboardTable />
			</Box>

			{status !== "END" && (
				<Box flex={1}>
					<Rounds />
				</Box>
			)}
		</Row>
	);
};

export default LeaderboardView;
