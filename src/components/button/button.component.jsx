import styled from 'styled-components';
import './button.styles.scss';

const ButtonContainer = styled.div`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	&.google-sign-in {
		background-color: #4285f4;
		color: white;

		&:hover {
			background-color: #357ae8;
			border: none;
		}
	}

	&.inverted {
		background-color: white;
		color: black;
		border: 1px solid black;

		&:hover {
			background-color: black;
			color: white;
			border: none;
		}
	}
`;

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<ButtonContainer
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</ButtonContainer>
	);
};

export default Button;
