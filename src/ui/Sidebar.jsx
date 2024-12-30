import styled from "styled-components";
import MainNav from "./MainNav.jsx";

const StyledSidebar = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 2.8rem;
	grid-row: 1 / -1;

	padding: 2rem 1.6rem;
	background-color: var(--background-box);
	border-right: 1px solid var(--background-box-darker);

	@media (max-width: 767px) {
		display: none;
	}
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<MainNav />
		</StyledSidebar>
	);
}

export default Sidebar;
