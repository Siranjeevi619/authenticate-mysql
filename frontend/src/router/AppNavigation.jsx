import React from "react";
import { Route, Router, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SignUpCard from "../components/SignUp";
import LoginCard from "../components/LoginCard";
import UsersPage from "../pages/UsersPage";
import Navbar from "../components/Navbar";
import AuthPage from "../pages/AuthPage";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/login" element={<LoginCard />}></Route>
        <Route path="/signup" element={<SignUpCard />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
      </Routes>
    </div>
  );
}

export default AppNavigation;
