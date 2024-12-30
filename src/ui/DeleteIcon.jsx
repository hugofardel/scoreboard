import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const DeleteIcon = styled(FaTimes)`
	margin-left: 8px;
	color: #d9534f;
	cursor: pointer;
	&:hover {
		color: #c9302c;
	}
`;

export default DeleteIcon;
