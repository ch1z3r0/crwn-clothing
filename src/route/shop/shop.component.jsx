import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.contexts';
import ProductCard from '../../components/product-card/product-card.component';
import { ShoppingCartContext } from '../../contexts/shopping-cart-contexts';

import './shop.component.scss';

const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
