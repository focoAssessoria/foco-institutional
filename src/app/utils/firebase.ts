// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMuN-Zw2JLOtuoNmQj2bh3ySZWjHEgq6I",
  authDomain: "foco-ec2de.firebaseapp.com",
  projectId: "foco-ec2de",
  storageBucket: "foco-ec2de.firebasestorage.app",
  messagingSenderId: "188067361819",
  appId: "1:188067361819:web:78e1ad699099363d6a74be",
  measurementId: "G-N2ER7297NV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
