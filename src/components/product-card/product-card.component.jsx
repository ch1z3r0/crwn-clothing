import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart.contexts';

import './product-card.style.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(ShoppingCartContext);
	const { name, price, imageUrl } = product;
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>

			<Button
				buttonType={'inverted'}
				type='button'
				onClick={() => addToCart(product)}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;
