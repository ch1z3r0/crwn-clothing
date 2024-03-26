import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart.contexts';

const CartItem = () => {
	const { cartItems } = useContext(ShoppingCartContext);
	return (
		<div>
			{cartItems.map((item) => {
				console.log(item);
				return (
					<div key={item.id}>
						{item.name} - {item.price}$ - {item.quantity}
					</div>
				);
			})}
			console.log(item);
		</div>
	);
};

export default CartItem;
