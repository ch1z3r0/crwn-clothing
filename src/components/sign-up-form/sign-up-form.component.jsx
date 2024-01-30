import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	console.log(formFields);

	const onSubmitHandler = async (event) => {
		// prevent user creating on default state of the form
		event.preventDefault();

		// handle password mismatches
		if (password !== confirmPassword) {
			console.log('Password mismatches');
			alert('Password do not match');
			return;
		}

		try {
			// Create new user
			console.log(
				'displayName passed to createAuthUserWithEmailAndPassword:',
				displayName
			);
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password,
				displayName
			);

			await createUserDocumentFromAuth(user, {
				displayName,
			});
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Error creating user, email already in use');
			}
			console.log('Error creating new user', error.message);
		}
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account yet?</h2>
			<span>Sign up with your email and password.</span>
			<form onSubmit={onSubmitHandler}>
				{/* <label>Display Name</label> */}
				<FormInput
					label='Display Name'
					type='text'
					required
					name='displayName'
					onChange={onChangeHandler}
					value={displayName}
				/>

				{/* <label>Email</label> */}
				<FormInput
					label='Email'
					type='email'
					required
					name='email'
					onChange={onChangeHandler}
					value={email}
				/>

				{/* <label>Password</label> */}
				<FormInput
					label='Password'
					type='password'
					required
					name='password'
					onChange={onChangeHandler}
					value={password}
				/>

				{/* <label>Confirm Password</label> */}
				<FormInput
					label='Confirm Password'
					type='password'
					required
					name='confirmPassword'
					onChange={onChangeHandler}
					value={confirmPassword}
				/>

				<Button buttonType={'inverted'} type='submit'>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
