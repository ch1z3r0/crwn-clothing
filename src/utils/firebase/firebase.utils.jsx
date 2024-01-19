import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBogIZ8_Kovd4EQfgzjT0WkzxOcgJgrB60",
  authDomain: "crwn-clothing-db-b3226.firebaseapp.com",
  projectId: "crwn-clothing-db-b3226",
  storageBucket: "crwn-clothing-db-b3226.appspot.com",
  messagingSenderId: "573539743680",
  appId: "1:573539743680:web:d2a85677bc8acb35d6ba25",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
