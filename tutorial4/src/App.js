import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import UserListingPage from './Pages/UserListingPage';
import UserDetailPage from './Pages/UserDetailPage';

import './App.css';

function App() {
  return (
    <div className="background">
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:userId" element={<UserDetailPage />} />
        <Route path="/profile" element={<UserListingPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
