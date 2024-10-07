import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoECS2LEKo9E_lmX5R70afh1eCpE1ycu8",
  authDomain: "vafri-a9541.firebaseapp.com",
  projectId: "vafri-a9541",
  storageBucket: "vafri-a9541.appspot.com",
  messagingSenderId: "421305885061",
  appId: "1:421305885061:web:25d71118970cb7809124ec",
  measurementId: "G-0N8NG15DH8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
