import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import firebase from "./../../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./../../firebase.js";
import picture from "./../../pictures/holiday_pic.jpg";

const LoginPage = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);

    if (!e.target.value.includes("@" && ".")) {
      setEmailErrorMessage(true);
    } else {
      setEmailErrorMessage(false);
    }
  };

  const getUser = () => {
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/holidays");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
  };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setErrorMessage(!errorMessage);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <div className="login__container">
        <h1 className="login__header">HappyDays</h1>
        <img src={picture} />
        <LoginForm
          password={password}
          email={email}
          emailInput={handleSetEmail}
          passwordInput={handleSetPassword}
        />

        <button onClick={getUser}>Submit</button>
      </div>
      <div>
        {errorMessage && (
          <div className="displayMessage">
            <h1 className="heading">
              Please enter a valid email and password!
            </h1>
            <button onClick={hideError}>Try again</button>
          </div>
        )}
      </div>

      <div>
        {emailErrorMessage && (
          <div className="displayMessage">
            <h1 className="heading">Please enter a valid email</h1>
            <button onClick={hideError}>Try again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;
