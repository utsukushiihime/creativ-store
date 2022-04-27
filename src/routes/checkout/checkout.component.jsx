import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	return (
		<>
			<div className='container'>
				<div className='row'>
					<h1>Checkout</h1>
					{cartItems.length ? (
						cartItems.map((cartItem) => {
							const { id, name, quantity } = cartItem;
							return (
								<div key={id}>
									<h2>{name}</h2>
									<span
										onClick={() => {
											removeItemFromCart(cartItem);
										}}
									>
										(-)
									</span>
									<span>{' '}{quantity}{' '}</span>
									<span
										onClick={() => {
											addItemToCart(cartItem);
										}}
									>
										(+)
									</span>
								</div>
							);
						})
					) : (
						<span>Your cart is empty</span>
					)}
				</div>
			</div>
		</>
	);
};

export default Checkout;
