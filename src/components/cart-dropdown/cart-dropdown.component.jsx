import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer } from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const handleCheckoutClick = () => {
		navigate('/checkout');
	};

	return (
		<CartDropDownContainer>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
