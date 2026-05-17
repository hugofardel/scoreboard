import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="hidden md:block text-sm mb-10 sticky top-4 left-auto bg-sidebar text-sidebar-foreground border border-accent rounded-full w-fit mx-auto shadow-2xs">
            <ul className="flex flex-row gap-10 justify-center items-center p-3 mx-8">
                <li>
                    <NavLink
                        to="/leaderboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-accent"
                                : "hover:text-accent"
                        }>
                        Classement
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/history" className={({ isActive }) =>
                        isActive
                            ? "text-accent"
                            : "hover:text-accent"
                    }>
                        Historique
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/graph" className={({ isActive }) =>
                        isActive
                            ? "text-accent"
                            : "hover:text-accent"
                    }>
                        Graphique
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;