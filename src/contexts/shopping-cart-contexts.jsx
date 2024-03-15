import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({
	cartItems: [],
});

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const value = { cartItems };

	return (
		<ShoppingCartContext.ShoppingCartProvider value={value}>
			{children}
		</ShoppingCartContext.ShoppingCartProvider>
	);
};
