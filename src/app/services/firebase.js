// ------------------ Imports ---------------------
import {
    initializeApp,
    getApps,
    getApp,
} from 'firebase/app';

import {
    initializeAuth,
    getReactNativePersistence,
} from 'firebase/auth';

import {
    getDatabase,
    ref,
    onValue,
} from 'firebase/database';

import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/database';
// ------------------------------------------------


// ----------- Firebase configuration -------------
const firebaseConfig = {
    apiKey: "AIzaSyD7xCZzwKbC1bMrJthpTeoOOkObwoJXG8A",
    authDomain: "thermo--sense-d05e4.firebaseapp.com",
    projectId: "thermo--sense-d05e4",
    storageBucket: "thermo--sense-d05e4.appspot.com",
    messagingSenderId: "509379196450",
    appId: "1:509379196450:web:d3bee579be482e178dbc7b",
};
// ------------------------------------------------


// ----------- Firebase initialization ------------
let app;
let auth;

if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
} else {
    console.log(getApp());
    app = getApp();
    auth = getAuth();
}
// ------------------------------------------------


// ----------------- Databases --------------------
const db = getDatabase();
const storage = getStorage(app);
const firestore = getFirestore(app);
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables
    auth,
    db,
    storage,
    firestore,

    // Functions
    ref,
    onValue,
};
// ------------------------------------------------