import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKQT2060qdqjaHrQdCSBXAm8Zj7EGy5Js",
  authDomain: "react-native-chat-app-605c9.firebaseapp.com",
  projectId: "react-native-chat-app-605c9",
  storageBucket: "react-native-chat-app-605c9.appspot.com",
  messagingSenderId: "234920082070",
  appId: "1:234920082070:web:2988ca7273facff2dea0b7"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
