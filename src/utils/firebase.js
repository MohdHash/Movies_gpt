// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXnLECCmSXTeMVosFpHSTrH039-JCEWJQ",
  authDomain: "movies-gpt-f0f5e.firebaseapp.com",
  projectId: "movies-gpt-f0f5e",
  storageBucket: "movies-gpt-f0f5e.appspot.com",
  messagingSenderId: "908737843376",
  appId: "1:908737843376:web:3f0c03ac09d7f1592ceb75",
  measurementId: "G-WFEF0PBN0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();