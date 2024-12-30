import styled, { css } from "styled-components";

const sizes = {
	small: css`
		font-size: 1rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.2rem;
		padding: 0.8rem 1.2rem;
		font-weight: 500;

		@media (max-width: 767px) {
			font-size: 1rem;
			padding: 0.8rem 1rem;
		}
	`,
	large: css`
		font-size: 1.5rem;
		padding: 1rem 1.5rem;
		font-weight: 500;

		@media (max-width: 767px) {
			font-size: 1rem;
			padding: 1rem 1.2rem;
		}
	`,
};

const variations = {
	primary: css`
		color: var(--color-brand-50);
		background-color: var(--btn-color);

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,
	secondary: css`
		color: ${(props) => (props.active ? "#ffd700" : "var(--color-grey-600)")};
		background: var(--color-grey-0);
		border: 1px solid;
		border-color: ${(props) => (props.active ? "#ffd700" : "var(--color-grey-600)")};

		&:hover {
			background-color: var(--color-grey-50);
		}

		${(props) => {
			props.active && "color: gold";
		}}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,
};

const Button = styled.button`
	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	${(props) => sizes[props.size]}
	${(props) => variations[props.variation]}
`;

Button.defaultProps = {
	variation: "primary",
	size: "medium",
};

export default Button;
