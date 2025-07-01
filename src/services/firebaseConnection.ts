import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAC8arsF2TeaVeINkdEXxSJYINOqSUaabY",
  authDomain: "xpnlinks-6dce7.firebaseapp.com",
  projectId: "xpnlinks-6dce7",
  storageBucket: "xpnlinks-6dce7.firebasestorage.app",
  messagingSenderId: "556922238822",
  appId: "1:556922238822:web:956596fe65a49299cafaa7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }