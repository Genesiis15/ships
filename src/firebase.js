// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDlV7SB2nLw0oVwStMwr2f0DG40byMa2es",
	authDomain: "makara-db4cc.firebaseapp.com",
	projectId: "makara-db4cc",
	storageBucket: "makara-db4cc.appspot.com",
	messagingSenderId: "533141768508",
	appId: "1:533141768508:web:5db24b115ea0d80891b639",
	measurementId: "G-1373EJEQG9"
};
// Initialize Firebase
let app;
let auth;

if (!getApps().length) {
	try {
		app = initializeApp(firebaseConfig);
		auth = initializeAuth(app, {
			persistence: getReactNativePersistence(ReactNativeAsyncStorage),
		});
	} catch (error) {
		console.error("Error initializing app:", error);
	}
} else {
	app = getApp();
	auth = getAuth(app);
}
export const db = getFirestore(app);
export const storage = getStorage(app)
