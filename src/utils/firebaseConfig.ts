// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj-YkhSR4lqaltEEuYidy_OijaePlg90c",
  authDomain: "website-pokemon.firebaseapp.com",
  projectId: "website-pokemon",
  storageBucket: "website-pokemon.appspot.com",
  messagingSenderId: "839936547688",
  appId: "1:839936547688:web:2769b09f68f12ad69e94dd",
  measurementId: "G-35DY4P1JVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");