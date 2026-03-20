import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEcpQ9gAzfqgLyI4Vpzg2WHPdvpxUXYRQ",
  authDomain: "hero-apps-dad87.firebaseapp.com",
  projectId: "hero-apps-dad87",
  storageBucket: "hero-apps-dad87.firebasestorage.app",
  messagingSenderId: "925718988513",
  appId: "1:925718988513:web:17b5ca37236aa10c5319a0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;