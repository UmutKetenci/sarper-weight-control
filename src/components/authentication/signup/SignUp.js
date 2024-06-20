import React, { useState } from "react";
import { auth } from "../../../lib/firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(e.message, "error");
    }
  };

  return (
    <div>
      <h2>Kaydol</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
