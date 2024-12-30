import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import MobileBottomBar from "../components/MobileBottomBar.jsx";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 20rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;

	@media (max-width: 767px) {
		grid-template-columns: auto;
	}
`;

const Main = styled.main`
	background-color: var(--background-color);
	padding: 3.6rem 4.5rem 6rem;
	overflow: auto;

	@media (max-width: 767px) {
		padding: 2rem 1rem 2rem 1rem;
	}
`;

const Container = styled.div`
	max-width: 200rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
			<MobileBottomBar />
		</StyledAppLayout>
	);
};

export default AppLayout;

// 20 Millions de pixels
