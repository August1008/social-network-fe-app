import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import UserDashboard from "./UserDashboard";
export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/registration" Component={Registration}></Route>
        <Route path="/userdashboard" Component={UserDashboard}></Route>
      </Routes>
    </Router>
  );
}
