import styled, { css } from "styled-components";

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;

	${(props) =>
		props.type === "horizontal" &&
		css`
			justify-content: space-between;
			align-items: stretch;
			gap: 4rem;
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;
			gap: 1.6rem;
		`}
`;

Row.defaultProps = {
	type: "vertical",
};

export default Row;
