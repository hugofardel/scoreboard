
import { Button } from "@/components/ui/button";
import { useMoveBack } from "@/hooks/useMoveBack";

function PageNotFound() {
	const moveBack = useMoveBack();

	return (
		<main className="bg-background h-screen flex items-center justify-center p-18">
			<div className="p-18 text-center shrink basis-7xl border-border rounded-md bg-gray-100">
				<h1 className="mb-2">404 | Page not found</h1>
				<Button size="lg" onClick={moveBack}>&larr; Go back</Button>
			</div>
		</main>
	)
}

export default PageNotFound;
