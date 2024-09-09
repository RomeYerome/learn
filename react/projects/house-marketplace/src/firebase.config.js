// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    authDomain: "housing-market-966bb.firebaseapp.com",
    projectId: "housing-market-966bb",
    storageBucket: "housing-market-966bb.appspot.com",
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);