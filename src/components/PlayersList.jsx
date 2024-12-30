import styled from "styled-components";

const StyledPlayersList = styled.div`
	display: flex;
	gap: 5px;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	max-width: max-content;
	margin: 15px 0 20px 0;
`;

const PlayersList = ({ children }) => {
	return <StyledPlayersList>{children}</StyledPlayersList>;
};

export default PlayersList;
