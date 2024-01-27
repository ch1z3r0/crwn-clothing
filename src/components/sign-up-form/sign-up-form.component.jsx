import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

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
		<div>
			<h1>Sign up with your email.</h1>
			<form onSubmit={onSubmitHandler}>
				<label>Display Name</label>
				<input
					type='text'
					required
					name='displayName'
					onChange={onChangeHandler}
					value={displayName}
				/>

				<label>Email</label>
				<input
					type='email'
					required
					name='email'
					onChange={onChangeHandler}
					value={email}
				/>

				<label>Password</label>
				<input
					type='password'
					required
					name='password'
					onChange={onChangeHandler}
					value={password}
				/>

				<label>Confirm Password</label>
				<input
					type='password'
					required
					name='confirmPassword'
					onChange={onChangeHandler}
					value={confirmPassword}
				/>

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
