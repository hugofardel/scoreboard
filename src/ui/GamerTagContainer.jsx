import styled from "styled-components";

const GamerTagContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	width: fit-content;
	padding: 0.8rem 1.5rem;
	margin: 5px;
	font-size: 1.5rem;

	color: white;
	background-color: ${({ colors }) => (colors?.backgroundColor ? colors.backgroundColor : "var(--color-grey-600)")};
	border-color: ${({ colors }) => (colors?.borderColor ? colors.borderColor : "var(--color-grey-600)")};
	border: 1px solid;
	border-radius: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	@media (max-width: 767px) {
		font-size: 1rem;
		gap: 0.8rem;
		padding: 0.6rem 0.8rem;
	}
`;

export default GamerTagContainer;
