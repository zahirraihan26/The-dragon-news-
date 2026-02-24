// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8MLoMVz61mKdr6CK6OWhsHQFgpGhR74M",
  authDomain: "dragon-news-a5686.firebaseapp.com",
  projectId: "dragon-news-a5686",
  storageBucket: "dragon-news-a5686.firebasestorage.app",
  messagingSenderId: "497467817315",
  appId: "1:497467817315:web:c97f6fdfa037d9fa9c2756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app