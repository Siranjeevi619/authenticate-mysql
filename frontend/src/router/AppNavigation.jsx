import React from "react";
import { Route, Router } from "react-router";
import HomePage from "../pages/HomePage";
import SignUpCard from "../components/SignUp";
import LoginCard from "../components/LoginCard";

function AppNavigation() {
  return (
    <div>
      <Router>
        <Route path="/login" element={<LoginCard />}></Route>
        <Route path="/signup" element={<SignUpCard />}></Route>
      </Router>
    </div>
  );
}

export default AppNavigation;
