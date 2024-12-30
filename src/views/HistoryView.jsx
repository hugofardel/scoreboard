import HistoryTable from "../components/HistoryTable.jsx";
import { useRedirectToSettings } from "../hook/useRedirectToSettings.js";
import Box from "../ui/Box.jsx";
import Row from "../ui/Row.jsx";

const HistoryView = () => {
	useRedirectToSettings();

	return (
		<Row>
			<Box>
				<HistoryTable />
			</Box>
		</Row>
	);
};

export default HistoryView;
