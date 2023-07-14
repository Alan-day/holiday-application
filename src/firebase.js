import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6YpmtwVvAERxeuqnWSi3t7EC7y4syAT4",
  authDomain: "holiday-app-34273.firebaseapp.com",
  projectId: "holiday-app-34273",
  storageBucket: "holiday-app-34273.appspot.com",
  messagingSenderId: "47149583422",
  appId: "1:47149583422:web:317574be6b22da3f6d956f",
});

export const auth = app.auth();
export default app;
