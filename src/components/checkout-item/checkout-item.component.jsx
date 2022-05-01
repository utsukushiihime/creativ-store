import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

import {
	RiDeleteBack2Fill,
	RiAddBoxFill,
	RiCheckboxIndeterminateFill,
} from 'react-icons/ri';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'> {name} </span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandler}>
					<RiCheckboxIndeterminateFill />
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={addItemHandler}>
					<RiAddBoxFill />
				</div>
			</span>
			<span className='price'> {price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				<RiDeleteBack2Fill />
			</div>
		</div>
	);
};

export default CheckoutItem;
