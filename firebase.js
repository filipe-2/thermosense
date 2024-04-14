import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1FoizL5m7eup3flmzvUjdU763MmYZ014",
    authDomain: "thermo-sense-app.firebaseapp.com",
    projectId: "thermo-sense-app",
    storageBucket: "thermo-sense-app.appspot.com",
    messagingSenderId: "110348919644",
    appId: "1:110348919644:web:a5e303c8bdc82fde565799"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };