import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { ShoppingCartContext } from '../../contexts/shopping-cart.contexts';

import './cart-icon.styles.scss';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext);
	const toggleCartDisplay = () => setIsCartOpen(!isCartOpen);
	return (
		<div className='cart-icon-container' onClick={toggleCartDisplay}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
