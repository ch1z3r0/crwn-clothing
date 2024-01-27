import {
	signInWithGooglePopUp,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopUp();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<button onClick={logGoogleUser}>Sign In With Google </button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
