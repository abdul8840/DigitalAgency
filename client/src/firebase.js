// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "digitalagency-1c16b.firebaseapp.com",
  projectId: "digitalagency-1c16b",
  storageBucket: "digitalagency-1c16b.appspot.com",
  messagingSenderId: "432195178987",
  appId: "1:432195178987:web:32eeb7018d53c31af689ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);