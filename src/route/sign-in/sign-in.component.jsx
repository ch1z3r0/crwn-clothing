import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      } catch (error) {
        console.error("Error during redirect result:", error);
      }
    };

    handleRedirectResult();
  }, []);

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };
  return (
    <div>
      <button onClick={logGooglePopupUser}>Sign In With Google PopUp</button>
      <button onClick={logGoogleRedirectUser}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
