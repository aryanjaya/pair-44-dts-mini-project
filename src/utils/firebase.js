// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY0RFvWO4jD0vPwmTp_1Q4H_LAZUiAXmE",
  authDomain: "dts-pair-44-movies-app.firebaseapp.com",
  projectId: "dts-pair-44-movies-app",
  storageBucket: "dts-pair-44-movies-app.appspot.com",
  messagingSenderId: "838225479828",
  appId: "1:838225479828:web:8e4b5fe235eb981f3c0c81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

export { auth };
