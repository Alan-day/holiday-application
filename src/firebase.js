import firebase from "firebase/app";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6YpmtwVvAERxeuqnWSi3t7EC7y4syAT4",
  authDomain: "holiday-app-34273.firebaseapp.com",
  projectId: "holiday-app-34273",
  storageBucket: "holiday-app-34273.appspot.com",
  messagingSenderId: "47149583422",
  appId: "1:47149583422:web:317574be6b22da3f6d956f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
