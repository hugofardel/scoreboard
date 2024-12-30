import styled from "styled-components";
import { useMoveBack } from "../hook/useMoveBack.js";

const StyledPageNotFound = styled.main`
	height: 100vh;
	background-color: var(--background-color);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4.8rem;
`;

const Box = styled.div`
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);

	padding: 4.8rem;
	flex: 0 1 96rem;
	text-align: center;

	& h1 {
		margin-bottom: 3.2rem;
	}
`;

function PageNotFound() {
	const moveBack = useMoveBack();

	return (
		<StyledPageNotFound>
			<Box>
				<h1>The page you are looking for could not be found 😢</h1>
				<button onClick={moveBack} size="large">
					&larr; Go back
				</button>
			</Box>
		</StyledPageNotFound>
	);
}

export default PageNotFound;
