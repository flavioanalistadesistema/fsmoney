import styled from "styled-components";
import { darken, transparentize } from "polished"

export const Container = styled.form`
	h2 {
		color: var(--text-title);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;
		border: 1px solid var(--input-border-modal);
		background: var(--input-background-modal);

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
			padding: 0 1.5rem;
		}		  
	}

	button[type="submit"] {
		width: 100%;
		height: 4rem;
		background: var(--green);
		color: var(--white);
		border-radius: 0.2 5rem;
		border: 0;
		margin-top: 1.5rem;
		font-size: 1rem;
		font-weight: 600;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 01.5rem;
`
interface radioBoxProps {
	isActive: boolean
	activeColor: 'green' | 'red'
}

const mapColor = {
	green: '#33CC95',
	red:  '#e52e4d'
}

export const RadioBox = styled.button<radioBoxProps>`
	height: 4rem;
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;

	background: ${(props) => props.isActive 
	? transparentize(0.9, mapColor[props.activeColor])
	: 'transparent'};

	display: flex;
	align-items: center;
	justify-content: center;

	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: inline-block;
		margin-left: 1rem;
		font-size: var(--text-title);
	}
`