import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	// find if cart items contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	// if found increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// return new array with modified/new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	// find if cart items contains productToRemove if product quantity is 1
	// remove product from cart
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	// if product quantity is more than 1 decrement quantity
	if (existingCartItem.quantity > 1) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}

	// return new array with modified/deleted cart item
	return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			total += cartItem.quantity;
			return total;
		}, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		removeItemFromCart,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
