import LineChartScore from "@/components/LineChartScore";
import { useRedirectToSettings } from "../hooks/useRedirectToSettings";

const GraphicView = () => {
	useRedirectToSettings();

	return (
		<LineChartScore />
	);
};

export default GraphicView;
