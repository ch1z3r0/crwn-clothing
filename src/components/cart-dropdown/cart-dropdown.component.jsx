import Button from '../button/button.component';

import './cart-dropdown-styles.scss';

const CardDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>CHECK OUT NOW</Button>
		</div>
	);
};

export default CardDropdown;
