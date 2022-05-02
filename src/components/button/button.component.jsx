import './button.styles.jsx';
import { BaseButton } from './button.styles';

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
	addToCart: 'add-to-cart',
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<BaseButton
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</BaseButton>
	);
};

export default Button;
