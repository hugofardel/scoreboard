import { Outlet } from "react-router-dom";
import MobileBottomBar from "./MobileBottomBar";
import Navbar from "./Navbar";

const AppLayout = () => {
	return (
		<div className="h-dvh">
			<Navbar />
			<main className="bg-background overflow-auto p-2 pb-16 md:px-12 md:py-8">
				<div className="max-w-420 mx-auto w-full flex flex-col gap-6">
					<Outlet />
				</div>
			</main>
			<MobileBottomBar />
		</div>
	);
};

export default AppLayout;