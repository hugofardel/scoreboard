import styled from "styled-components";

// Conteneur principal du tableau
const TableContainer = styled.div`
	margin-top: 20px;
	background-color: #1b1b2f;
	border-radius: 15px;
	padding: 20px;
	color: white;
	overflow: auto;
`;

// Table stylisée
const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 10px; // Espace entre les lignes
`;

// Style pour chaque rangée
const TableRow = styled.tr`
	background-color: #2d2d44;
`;

// Cellule stylisée
const TableCell = styled.td`
	padding: 15px;
	text-align: center;
	font-size: 1.2rem;

	&:first-child {
		padding-left: 20px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 10px;
		width: 100px;
	}

	&:last-child {
		padding-right: 20px;
	}
`;

const THead = styled.thead`
	border-radius: 100%;
	background-color: var(--background-header);
`;

// Cellule pour l'icône de trophée
const TrophyCell = styled(TableCell)`
	display: flex;
	align-items: center;
	justify-content: center;

	${({ position }) => {
		if (position === 1) {
			return `color: #ffd700;`;
		} else if (position === 2) {
			return `color: #c0c0c0;`;
		} else if (position === 3) {
			return `color: #cd7f32;`;
		}
	}}
`;

const TRHeader = styled.tr`
	background-color: var(--background-header);
`;

export { TableContainer, Table, THead, TableRow, TableCell, TrophyCell, TRHeader };
