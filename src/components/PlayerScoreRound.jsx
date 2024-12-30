import styled from "styled-components";
import Input from "../ui/Input.jsx";
import { useGameActions } from "../hook/useGameActions.js";
import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import { FaTrophy } from "react-icons/fa";

const StyledItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin: 0.8rem 0;
	padding: 1rem;

	color: ${(props) => (props.isWinner ? "#ffd700" : "var(--btn-color)")};
	border: 1px solid;
	border-color: ${(props) => (props.isWinner ? "#ffd700" : "var(--btn-color)")};
	border-radius: 8px;
	font-size: 1.2rem;
	width: 100%;
`;

const Player = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100px;
	flex-shrink: 0;
`;

const StyledInput = styled(Input)`
	max-width: 130px;
	flex-grow: 1;
	flex-basis: 0;
	min-width: 0;
	padding: 5px;
	box-sizing: border-box;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
`;

const PlayerScoreRound = ({ roundIndex, player, score, handleClickWinner, isWinner }) => {
	const { updateScore } = useGameActions();
	const [currentScore, setCurrentScore] = useState(Number(score));

	useEffect(() => {
		setCurrentScore(score);
	}, [score]);

	function handleChangeInput(value) {
		if (/^\d*$/.test(value)) {
			setCurrentScore(value !== "" ? Number(value) : "");
		}
	}

	function handleKeyDown(e) {
		if (e.key !== "Backspace" && e.key !== "Tab" && e.key !== "Delete" && !/^\d$/.test(e.key)) {
			e.preventDefault();
		}
	}

	function handleBlur() {
		updateScore(player.id, roundIndex, currentScore);
	}

	return (
		<StyledItem key={player.id} isWinner={isWinner}>
			<Player>{player.name}</Player>

			<Actions>
				<StyledInput
					type="number"
					placeholder="points"
					disabled={isWinner}
					value={currentScore}
					onChange={(e) => handleChangeInput(e.target.value)}
					onKeyDown={handleKeyDown}
					onBlur={handleBlur}
					onFocus={(e) => e.target.select()}
				/>
				<Button
					size="small"
					variation="secondary"
					active={isWinner}
					onClick={() => handleClickWinner(player.id, roundIndex)}
				>
					<FaTrophy />
				</Button>
			</Actions>
		</StyledItem>
	);
};

export default PlayerScoreRound;
