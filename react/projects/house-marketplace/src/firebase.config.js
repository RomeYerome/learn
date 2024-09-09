// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsPUTty744DZd6REcBJ2diKsr-biJ6gOE",
    authDomain: "housing-market-966bb.firebaseapp.com",
    projectId: "housing-market-966bb",
    storageBucket: "housing-market-966bb.appspot.com",
    messagingSenderId: "57644049944",
    appId: "1:57644049944:web:28343944aba1a1aa65c56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);