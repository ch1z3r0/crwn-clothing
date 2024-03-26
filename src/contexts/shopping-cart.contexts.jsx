import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({
	cartItems: [],
	totalPrice: 0,
	isCartOpen: false,
	setIsCartOpen: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const [isCartOpen, setIsCartOpen] = useState(false);

	const addToCart = (newItem) => {
		// check if item already exists in the cart
		const existingItem = cartItems.find((item) => item.id === newItem.id);

		if (existingItem) {
			setCartItems(
				cartItems.map((item) =>
					item.id === newItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
			// console.log(cartItems.quantity);
		} else {
			setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
		}
	};

	// const addToCart = (newItem) => {
	// 	// Check if the item already exists in the cart
	// 	const existingItem = cartItems.find((item) => item.id === newItem.id);

	// 	if (existingItem) {
	// 		// If the item exists, create a new array where the existing item's quantity is incremented
	// 		setCartItems(
	// 			cartItems.map((item) =>
	// 				item.id === newItem.id
	// 					? { ...item, quantity: item.quantity + 1 }
	// 					: item
	// 			)
	// 		);
	// 	} else {
	// 		// If the item does not exist, add it to the cart with a quantity of 1
	// 		setCartItems((prevItems) => [...prevItems, { ...newItem, quantity: 1 }]);
	// 	}
	// };

	const value = { cartItems, addToCart, isCartOpen, setIsCartOpen };
	return (
		<ShoppingCartContext.Provider value={value}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

/* 

addItemToCart
- look for item with the same id and add quantity
- if item is not found, then create new item in cart

*/
