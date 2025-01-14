import React from "react";
// import Navbar from "../components/Navbar";
import SignUpCard from "../components/SignUp";
import LoginCard from "../components/LoginCard";
import { useState } from "react";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleDisplay = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <div>
      {isSignUp ? (
        <SignUpCard displayCard={handleDisplay} />
      ) : (
        <LoginCard displayCard={handleDisplay} />
      )}
    </div>
  );
}

export default AuthPage;
