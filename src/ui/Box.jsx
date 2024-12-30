import styled from "styled-components";

const Box = styled.div`
	background-color: var(--background-box);
	padding: 2rem;
	border-radius: 12px;
	max-width: 100%;

	flex: ${(props) => props.flex || 1};

	@media (max-width: 767px) {
		padding: 1rem 0.8rem;
	}
`;

export default Box;
