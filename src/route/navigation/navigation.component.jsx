import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.contexts';
import { ShoppingCartContext } from '../../contexts/shopping-cart.contexts';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	const { isCartOpen } = useContext(ShoppingCartContext);

	// const [isVisible, setIsVisible] = useState(false);

	// const toggleCartDisplay = () => {
	// 	setIsVisible(!isVisible);
	// };

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					{
						<Link className='nav-link' to='/shop'>
							SHOP
						</Link>
					}

					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							<Link>SIGN OUT</Link>
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon /* toggleCartDisplay={toggleCartDisplay} */ />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			{<Outlet />}
		</Fragment>
	);
};

export default Navigation;
