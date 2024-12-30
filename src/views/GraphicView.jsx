import LineChart from "../components/LineChart.jsx";
import { COLORS } from "../helpers.js";
import { useGameActions } from "../hook/useGameActions.js";
import { useRedirectToSettings } from "../hook/useRedirectToSettings.js";
import Box from "../ui/Box.jsx";
import Row from "../ui/Row.jsx";

const GraphicView = () => {
	const { rounds, players } = useGameActions();
	useRedirectToSettings();

	const labelsX = Array.from({ length: rounds + 1 }).map((_, index) => index + 1);

	const datasets = players.map((player, index) => {
		return {
			label: player.name,
			data: player.scores,
			borderColor: COLORS[index].borderColor,
			backgroundColor: COLORS[index].backgroundColor,
		};
	});

	return (
		<Row>
			<Box>
				<LineChart labelsX={labelsX} datasets={datasets} />
			</Box>
		</Row>
	);
};

export default GraphicView;
