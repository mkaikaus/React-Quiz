// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyD1ClP4_SIAaOQG7Rn-zardoJ8aTJY0N_A",
  authDomain: "react-quiz-dev-14947.firebaseapp.com",
  databaseURL: "https://react-quiz-dev-14947-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-dev-14947",
  storageBucket: "react-quiz-dev-14947.appspot.com",
  messagingSenderId: "253395821421",
  appId: "1:253395821421:web:76f05e879b90037880f064"
});

export default app;
