// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from "firebase/auth";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkGWgtgPyRhEqF0L8hm3glzDoegJ0x7jM",
  authDomain: "yt-clone-836d5.firebaseapp.com",
  projectId: "yt-clone-836d5",
  appId: "1:1041729127661:web:e3b0014b413b3ce4ad78e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves wih the user's credentials
 */

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out
 * @returns A promise that resolves when the user is signed out 
 */

export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when the user auth state changes
 * @returns A function to unsubscribe callback
 */

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}