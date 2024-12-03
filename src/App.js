import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import logo from './logo.svg';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
