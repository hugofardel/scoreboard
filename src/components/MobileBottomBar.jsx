import { BsGraphUp, BsTable } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	display: none;
	flex-direction: row;
	width: 100vw;
	background-color: white;

	@media (max-width: 767px) {
		display: flex;
	}
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Li = styled.li`
	flex: 33%;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;

		color: var(--color-grey-600);
		font-size: 0.8rem;
		font-weight: 500;
		padding: 0.8rem 1rem;
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
		width: 1rem;
		height: 1rem;
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

const MobileBottomBar = () => {
	return (
		<Nav>
			<NavList>
				<Li>
					<StyledNavLink to="/leaderboard">
						<MdOutlineLeaderboard />
						<span>Leaderboard</span>
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to="/history">
						<BsTable />
						<span>History</span>
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to="/graph">
						<BsGraphUp />
						<span>Graphique</span>
					</StyledNavLink>
				</Li>
			</NavList>
		</Nav>
	);
};

export default MobileBottomBar;
