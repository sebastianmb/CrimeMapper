import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSQr2gqUhiz4TjASdBWMsaijNi6sEWQR4",
    authDomain: "crimemapper-ad2b2.firebaseapp.com",
    projectId: "crimemapper-ad2b2",
    storageBucket: "crimemapper-ad2b2.firebasestorage.app",
    messagingSenderId: "1019213149945",
    appId: "1:1019213149945:web:1ff52738b4b58af8da5428",
    measurementId: "G-DCH9T4TT33"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
