
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getAnalytics} from "firebase/analytics"


const firebaseConfig = {
  apiKey: "AIzaSyCtbJ-G0ZY4obuJe6954obvabJSOsbaKzs",
  authDomain: "ph-hotels-react-firebase-auth.firebaseapp.com",
  projectId: "ph-hotels-react-firebase-auth",
  storageBucket: "ph-hotels-react-firebase-auth.appspot.com",
  messagingSenderId: "424912175636",
  appId: "1:424912175636:web:27e6e4c4aeb39862645d01",
  measurementId: "G-RYSTZDJ85G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =getAnalytics;
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};