
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDsSCB2RXnoTwhxoHLUfOQBc37uhodIpg",
  authDomain: "bancotii02-afaa1.firebaseapp.com",
  projectId: "bancotii02-afaa1",
  storageBucket: "bancotii02-afaa1.firebasestorage.app",
  messagingSenderId: "400116587562",
  appId: "1:400116587562:web:bb423967d4cce706e53753",
  measurementId: "G-SS4237MG69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};