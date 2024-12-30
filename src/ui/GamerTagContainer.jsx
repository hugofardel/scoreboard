import styled from "styled-components";

const GamerTagContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	width: fit-content;
	background-color: #f0f0f0;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	margin: 5px;
	font-size: 1.5rem;
	color: #333;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	@media (max-width: 767px) {
		font-size: 1rem;
		gap: 0.8rem;
		padding: 0.6rem 0.8rem;
	}
`;

export default GamerTagContainer;
