import { DrawerDialog } from "@/components/DrawerDialog";
import RoundForm from "@/components/RoundForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaderboardTable from "../components/LeaderboardTable";
import { useGameActions } from "../hooks/useGameActions";
import { useRedirectToSettings } from "../hooks/useRedirectToSettings";

const LeaderboardView = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(false);

	const { status, changeStatus, retry } = useGameActions();
	useRedirectToSettings();

	function handleEndGame() {
		changeStatus("FINISHED");
	}

	function handleBackSettings() {
		navigate("/");
	}

	function closeDialog() {
		setOpen(false);
	}

	return (
		<div className="flex flex-col md:flex-row h-full justify-between items-stretch divide-x gap-12">
			<div className="bg-card text-card-foreground rounded-md max-w-full flex-1">
				<LeaderboardTable />
			</div>

			<div className="w-full md:w-fit p-2 pl-0 flex justify-center md:justify-start flex-col gap-4">
				{status === "FINISHED" ? (
					<>
						<Button onClick={retry}>Recommencer</Button>
						<Button variant="secondary" onClick={handleBackSettings}>Modifier les joueurs</Button>
					</>
				) : (
					<>
						<DrawerDialog
							title="Nouvelle manche"
							description="Veuillez ajouter les points de chaque joueur durant cette manche."
							triggerLabel="Nouvelle manche"
							open={open}
							setOpen={setOpen}
						>
							<RoundForm close={closeDialog} />
						</DrawerDialog>
						<Button variant="destructive" onClick={handleEndGame}>Fin de la partie</Button>
					</>
				)}
			</div>
		</div>
	);
};


export default LeaderboardView;
