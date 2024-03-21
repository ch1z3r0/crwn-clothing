import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart.contexts';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CardDropdown = () => {
	const { cartItems } = useContext(ShoppingCartContext);
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				<span>
					{cartItems.map((item) => (
						<div key={item.id}>
							{item.name} - {item.price}$
						</div>
					))}
				</span>
			</div>
			<Button>CHECK OUT NOW</Button>
		</div>
	);
};

export default CardDropdown;
