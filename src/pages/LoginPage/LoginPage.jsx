
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import firebase from "./../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase.js";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/homepage");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
 

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // User is not authenticated, redirect to login or show a message
      }
    });

    return () => unsubscribe(); // Cleanup the event listener when component unmounts
  }, []);

  return (
    <>
      <div className="login__container">
        <h1 className="login__header">HappyDays</h1>
        <LoginForm
          password={password}
          email={email}
          emailInput={setEmail}
          passwordInput={setPassword}
          handleSubmit={getUser}
        />

        {/*insert conditional rendering statement here */}
      </div>

      <div>
        {errorMessage && (
          <div className="displayMessage">
            <h1 className="heading">
              ❌Please enter a valid email and password!
            </h1>
            <button onClick={hideError}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;
