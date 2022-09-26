import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAFGna4cqm2cZUaz9CEoB-danQNwK3ct8o",
    authDomain: "kanban-7460e.firebaseapp.com",
    projectId: "kanban-7460e",
    storageBucket: "kanban-7460e.appspot.com",
    messagingSenderId: "571040515110",
    appId: "1:571040515110:web:412bfb489dcd2d9fc2d2e7",
    measurementId: "G-DVLYWGJ23M"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth}