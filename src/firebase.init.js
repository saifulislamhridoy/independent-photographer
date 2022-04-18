// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqXHmP8NO7YU4mQ_c8Kki_lf3-VIH7umY",
  authDomain: "photoshot-b0bf3.firebaseapp.com",
  projectId: "photoshot-b0bf3",
  storageBucket: "photoshot-b0bf3.appspot.com",
  messagingSenderId: "649453762095",
  appId: "1:649453762095:web:bc0843950b8c583690f8da",
  measurementId: "G-XJMJNK0JMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;