import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA41e4BfFNmiQT4xRW8TyomLcOLKOepMvU",
  authDomain: "gren-shop-asliddin.firebaseapp.com",
  projectId: "gren-shop-asliddin",
  storageBucket: "gren-shop-asliddin.firebasestorage.app",
  messagingSenderId: "600423248511",
  appId: "1:600423248511:web:8bd79caa156112d41c054a",
  measurementId: "G-ZXJX9C3FMF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth, analytics, signInWithGoogle };

