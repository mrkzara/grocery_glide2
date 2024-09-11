// firebase.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARyYHpDy4xKtE4dR3zCjW3sLEpQGun5Z8",
  authDomain: "groceryglide-51e31.firebaseapp.com",
  projectId: "groceryglide-51e31",
  storageBucket: "groceryglide-51e31.appspot.com",
  messagingSenderId: "717163631445",
  appId: "1:717163631445:web:7ca427b464b109f1f355dc",
  measurementId: "G-3F97BDCDZ4"
};

// Initialize Firebase app
let app;
if (getApps().length === 0) {
  console.log('Initializing Firebase');
  app = initializeApp(firebaseConfig);
  console.log('Firebase Initialized');
} else {
  console.log('Firebase already initialized');
  app = getApp();
}

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const database = getFirestore(app);
export const authentication = auth;
