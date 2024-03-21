import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({
	cartItems: [],
	totalPrice: 0,
});

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (newItem) => {
		setCartItems([...cartItems, newItem]);
	};

	const value = { cartItems, addToCart };
	return (
		<ShoppingCartContext.Provider value={value}>
			{children}
		</ShoppingCartContext.Provider>
	);
};
