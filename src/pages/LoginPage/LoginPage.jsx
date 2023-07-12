import React from "react";
import { useState } from "react";
import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {


const handleSubmit =() =>{
    
}



  return (
    <>
      <div className="login__container">
        <h1 className="login__header">HappyDays</h1>
        <LoginForm handleSubmit={handleSubmit}/>
      </div>
    </>
  );
};

export default LoginPage;
