import LineChart from "../components/LineChart.jsx";
import { useGameActions } from "../hook/useGameActions.js";
import { useRedirectToSettings } from "../hook/useRedirectToSettings.js";
import Box from "../ui/Box.jsx";
import Row from "../ui/Row.jsx";

const COLORS = [
	{
		borderColor: "rgba(75,192,192,1)",
		backgroundColor: "rgba(75,192,192,0.2)",
	},
	{
		borderColor: "rgba(54,162,235,1)",
		backgroundColor: "rgba(54,162,235,0.2)",
	},
	{
		borderColor: "rgba(255,99,132,1)",
		backgroundColor: "rgba(255,99,132,0.2)",
	},
	{
		borderColor: "rgba(255,159,64,1)",
		backgroundColor: "rgba(255,159,64,0.2)",
	},
	{
		borderColor: "rgba(153,102,255,1)",
		backgroundColor: "rgba(153,102,255,0.2)",
	},
	{
		borderColor: "rgba(255,205,86,1)",
		backgroundColor: "rgba(255,205,86,0.2)",
	},
	{
		borderColor: "rgba(201,203,207,1)",
		backgroundColor: "rgba(201,203,207,0.2)",
	},
	{
		borderColor: "rgba(7,59,58,1)",
		backgroundColor: "rgba(7,59,58,0.2)",
	},
	{
		borderColor: "rgba(148,41,17,1)",
		backgroundColor: "rgba(148,41,17,0.2)",
	},
];

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
