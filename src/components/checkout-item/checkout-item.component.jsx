import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-item.styles';

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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan> {name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>
					<RiCheckboxIndeterminateFill />
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>
					<RiAddBoxFill />
				</Arrow>
			</Quantity>
			<BaseSpan> {price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>
				<RiDeleteBack2Fill />
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
