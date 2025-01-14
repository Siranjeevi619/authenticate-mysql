import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUp";

function HomePage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleDisplay = () => {
    setIsSignUp((prev) => !prev);
  };
  return <div></div>;
}

export default HomePage;
