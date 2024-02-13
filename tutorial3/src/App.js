import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';
import './App.css'

const App = () => {
  return (
     <div className="background">
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
     </div>
  );
};

export default App;
