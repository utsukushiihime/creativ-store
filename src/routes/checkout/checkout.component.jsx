import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer } from './checkout.styles';

const checkoutHeaderItems = [
	{
		name: 'Product',
	},
	{
		name: 'Description',
	},
	{
		name: 'Quantity',
	},
	{
		name: 'Price',
	},
	{
		name: 'Remove',
	},
];

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<div className='checkout-header'>
				{checkoutHeaderItems.map((item, index) => (
					<div key={index} className='header-block'>
						<span>{item.name}</span>
					</div>
				))}
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>TOTAL: ${cartTotal}</div>
		</CheckoutContainer>
	);
};

export default Checkout;
