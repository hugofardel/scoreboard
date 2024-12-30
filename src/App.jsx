import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";
import LeaderboardView from "./views/LeaderboardView.jsx";
import PageNotFound from "./views/PageNotFound.jsx";
import HistoryView from "./views/HistoryView.jsx";
import SettingUpView from "./views/SettingUpView.jsx";
import GraphicView from "./views/GraphicView.jsx";

function App() {
	return (
		<GameProvider>
			<GlobalStyles />

			<BrowserRouter>
				<Routes>
					<Route index element={<SettingUpView />} />
					<Route element={<AppLayout />}>
						<Route path="/leaderboard" element={<LeaderboardView />} />
						<Route path="/history" element={<HistoryView />} />
						<Route path="/graph" element={<GraphicView />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	);
}

export default App;
