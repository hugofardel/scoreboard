import { FaTrophy } from "react-icons/fa";

const TableContainer = ({ children }: React.ComponentProps<'div'>) => {
	return (
		<div className="relative w-full overflow-auto">{children}</div>
	)
}

const Table = ({ children }: React.ComponentProps<'table'>) => {
	return (
		<table className="w-full text-base">{children}</table>
	)
}


const TableHead = ({ children }: React.ComponentProps<'thead'>) => {
	return (
		<thead className="[&_tr]:border-b">{children}</thead>
	)
}

const TableRow = ({ children }: React.ComponentProps<'tr'>) => {
	return (
		<tr className="border-b transition-colors hover:bg-muted/50">{children}</tr>
	)
}

const Th = ({ children }: React.ComponentProps<'th'>) => {
	return (
		<th className="h-10 p-4 text-left align-middle font-medium whitespace-nowrap text-foreground">{children}</th>
	)
}

const TableBody = ({ children }: React.ComponentProps<'tbody'>) => {
	return (
		<tbody className="[&_tr:last-child]:border-0">{children}</tbody>
	)
}

const TableCell = ({ children }: React.ComponentProps<'td'>) => {
	return (
		<td className="p-4 align-middle whitespace-nowrap">{children}</td>
	)
}

const Trophy = ({ position }: { position: number }) => {
	let cupColor;
	if (position === 1) {
		cupColor = "#ffd700";
	} else if (position === 2) {
		cupColor = "#c0c0c0";
	} else if (position === 3) {
		cupColor = "#cd7f32";
	}

	return (
		<div className="inline-flex gap-2 items-center">
			{cupColor && <FaTrophy style={{ color: cupColor, fill: cupColor }} />}{" " + position}
		</div>
	)
}

export { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Th, Trophy };

