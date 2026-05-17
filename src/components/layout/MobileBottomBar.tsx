import { BsGraphUp, BsTable } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileBottomBar = () => {
	return (
		<nav className="block md:hidden bg-background fixed bottom-0 left-0 w-screen border-t border-border">
			<ul className="flex flex-row items-center justify-center w-full">
				<li className="flex-1/3">
					<NavLink className="navlink__mobile" to="/leaderboard">
						<MdOutlineLeaderboard />
						<span>Leaderboard</span>
					</NavLink>
				</li>
				<li className="flex-1/3">
					<NavLink className="navlink__mobile" to="/history">
						<BsTable />
						<span>History</span>
					</NavLink>
				</li>
				<li className="flex-1/3">
					<NavLink className="navlink__mobile" to="/graph">
						<BsGraphUp />
						<span>Graphique</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MobileBottomBar;
