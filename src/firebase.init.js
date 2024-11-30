// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEn5uOOWmxavf2dHihqtcGmB8ClRCvOCE",
  authDomain: "fir-project-auth-958c1.firebaseapp.com",
  projectId: "fir-project-auth-958c1",
  storageBucket: "fir-project-auth-958c1.firebasestorage.app",
  messagingSenderId: "489240312200",
  appId: "1:489240312200:web:d0339aa5b8436388e8a23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);