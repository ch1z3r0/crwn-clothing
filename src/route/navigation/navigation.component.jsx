import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	// console.log(currentUser);

	// const signOutHandler = async () => {
	// 	await signOutUser();
	// 	setCurrentUser(null);
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
					<CartIcon />
				</div>
			</div>
			{<Outlet />}
		</Fragment>
	);
};

export default Navigation;
