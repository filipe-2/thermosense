import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALbZa77M-LI3gOfXlp6iplXjC4SyMGujA",
    authDomain: "thermo-sense.firebaseapp.com",
    projectId: "thermo-sense",
    storageBucket: "thermo-sense.appspot.com",
    messagingSenderId: "1059816778862",
    appId: "1:1059816778862:web:8b7ef9e4f7f283d4b94a7f"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };