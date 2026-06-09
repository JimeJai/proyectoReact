// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qruKO7YCUrOwLBeJBhUxZGUzyNBSdRY",
  authDomain: "tt-react.firebaseapp.com",
  projectId: "tt-react",
  storageBucket: "tt-react.firebasestorage.app",
  messagingSenderId: "579549985666",
  appId: "1:579549985666:web:64a5f9d57a4840ce71ad9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
