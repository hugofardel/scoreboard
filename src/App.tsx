import { GameProvider } from "@/contexts/GameContext";
// import GlobalStyles from "@/styles/GlobalStyles";
import AppLayout from "@/components/layout/AppLayout";
import GraphicView from "@/views/GraphicView";
import HistoryView from "@/views/HistoryView";
import LeaderboardView from "@/views/LeaderboardView";
import PageNotFound from "@/views/PageNotFound";
import SettingUpView from "@/views/SettingUpView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<GameProvider>
			{/* <GlobalStyles /> */}

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
