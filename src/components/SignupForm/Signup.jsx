import React, { useState } from "react";
import firebase from "../../firebase";
const Signup = ({ setEmail, setPassword, handleSignup }) => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default Signup;
