import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { useContext } from 'react';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
	// get cart items from cart context
	const { cartItems } = useContext(CartContext);

	// if cart items is empty, return 0
	// if cart item is in cart return the quantity of items
	const itemCount = cartItems.reduce((accumulatedQuantity, cartItem) => {
		return accumulatedQuantity + cartItem.quantity;
	}, 0);

	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

export default CartIcon;
