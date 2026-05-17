import HistoryTable from "../components/HistoryTable";
import { useRedirectToSettings } from "../hooks/useRedirectToSettings";

const HistoryView = () => {
	useRedirectToSettings();

	return (
		<HistoryTable />
	);
};

export default HistoryView;
