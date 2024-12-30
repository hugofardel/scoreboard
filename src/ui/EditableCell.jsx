import { useState } from "react";
import TableCell from "./TableCell.jsx";
import Input from "./Input.jsx";

const EditableCell = ({ value, onSave }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [currentValue, setCurrentValue] = useState(Number(value));

	const handleSave = () => {
		setIsEditing(false);
		onSave(Number(currentValue));
	};

	const handleChangeInput = (value) => {
		if (/^\d*$/.test(value)) {
			setCurrentValue(value !== "" ? Number(value) : "");
		}
	};

	function handleKeyDown(e) {
		if (e.key !== "Backspace" && e.key !== "Tab" && !/^\d$/.test(e.key)) {
			e.preventDefault();
		}
	}

	return (
		<TableCell onDoubleClick={() => setIsEditing((prev) => !prev)}>
			{isEditing ? (
				<Input
					type="number"
					value={currentValue}
					onChange={(e) => handleChangeInput(e.target.value)}
					onFocus={(e) => e.target.select()}
					onBlur={handleSave}
					onKeyDown={handleKeyDown}
					autoFocus
				/>
			) : (
				value
			)}
		</TableCell>
	);
};

export default EditableCell;
