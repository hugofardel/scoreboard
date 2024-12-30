import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BsGraphUp, BsTable } from "react-icons/bs";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		color: var(--color-grey-600);
		font-size: 1rem;
		font-weight: 500;
		padding: 1rem 2rem;
		transition: all 0.3s;
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-brand-600);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-brand-600);
	}
`;

function MainNav() {
	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink to="/leaderboard">
						<MdOutlineLeaderboard />
						<span>Leaderboard</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/history">
						<BsTable />
						<span>History</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/graph">
						<BsGraphUp />
						<span>Graphique</span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
