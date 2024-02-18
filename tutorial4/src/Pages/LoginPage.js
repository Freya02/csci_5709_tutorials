import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/LoginPageStyle.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', {
        username: email,
        password: password
      });
      if (response.status === 200) {
        navigate('/profile');
      } else {
        setError('Wrong email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-page">
      <h2 className='headings'>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">LOGIN</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
