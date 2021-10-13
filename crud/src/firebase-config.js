import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBmX1PuEFr9-v6MiZgf8m62gbeKVUio7zo",
    authDomain: "crud-c475e.firebaseapp.com",
    projectId: "crud-c475e",
    storageBucket: "crud-c475e.appspot.com",
    messagingSenderId: "127750032293",
    appId: "1:127750032293:web:122958263f0444d127764c",
    measurementId: "G-96LBNYX22C"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)