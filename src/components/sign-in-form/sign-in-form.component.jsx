import { useState } from 'react';
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopUp,
} from '../../utils/firebase/firebase.utils';

// import { UserContext } from '../../contexts/user.contexts';

import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	// const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	// console.log(formFields);

	const signInWithGoogle = async () => {
		await signInWithGooglePopUp();
		// createUserDocumentFromAuth(user);
		// console.log(user);
		// console.log(respond);
	};

	const onSubmitHandler = async (event) => {
		// prevent user creating on default state of the form
		event.preventDefault();

		try {
			// Sign in with email and password
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			// setCurrentUser(user);
			console.log(user);
			alert('Sign in successful');
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('User not found / Invalid email');
					break;
				case 'auth/wrong-password':
					alert('Wrong password');
					break;
				default:
					console.log(error.message, error.code);
					alert('An error occurred while signing in');
					break;
			}
		}
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password.</span>
			<form onSubmit={onSubmitHandler}>
				<FormInput
					label='Email'
					type='email'
					required
					name='email'
					onChange={onChangeHandler}
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					name='password'
					onChange={onChangeHandler}
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
