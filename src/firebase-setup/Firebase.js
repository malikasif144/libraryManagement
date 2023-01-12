// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5n4gonQN-pmzazeoroqzYMgpEAi2MXZs",
  authDomain: "librarymanagement-react.firebaseapp.com",
  databaseURL: "https://librarymanagement-react-default-rtdb.firebaseio.com",
  projectId: "librarymanagement-react",
  storageBucket: "librarymanagement-react.appspot.com",
  messagingSenderId: "883070432628",
  appId: "1:883070432628:web:5edb4c07d7285824a16821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);