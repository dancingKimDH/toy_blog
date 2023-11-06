// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-NKR7Z7QWVJ"
};

try {
  app = getApp("app")
} catch (error) {
 app = initializeApp(firebaseConfig, "app") 
}



const firebase = initializeApp(firebaseConfig);

export default firebase;

const analytics = getAnalytics(firebase);