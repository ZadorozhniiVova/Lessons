// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPH6Wh40PhyJTpTlc9P-Th38QiKnKbfWo",
  authDomain: "gamestore-a5383.firebaseapp.com",
  projectId: "gamestore-a5383",
  storageBucket: "gamestore-a5383.appspot.com",
  messagingSenderId: "228920762873",
  appId: "1:228920762873:web:db9a1ca812440b4f48dd28",
  measurementId: "G-ZCW7ZQL6H8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
