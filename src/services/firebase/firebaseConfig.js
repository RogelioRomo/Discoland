
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDU0jlpuvbBSa2C9JcoR2siwP1uePUugWw",
    authDomain: "discoland-8537f.firebaseapp.com",
    projectId: "discoland-8537f",
    storageBucket: "discoland-8537f.appspot.com",
    messagingSenderId: "202246820360",
    appId: "1:202246820360:web:a4f631dcf41c1def38f7bd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);