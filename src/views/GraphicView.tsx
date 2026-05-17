import MyChart from "@/components/MyChart";
import { useRedirectToSettings } from "../hooks/useRedirectToSettings";

const GraphicView = () => {
	useRedirectToSettings();

	return (
		<MyChart />
	);
};

export default GraphicView;
