import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './RegistrationPageStyle.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (value!== ''){
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.match(/^[a-zA-Z]+$/) ) {
          error = 'Please enter only letters';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.match(emailRegex) ) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'password':
        if ( value.length < 8 ) {
          error = 'Password should be at least 8 characters';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password ) {
          error = 'Passwords do not match';
        }
        break;
      default:
        break;
    }
    }
    else{
      error = 'Fill all fields first!!';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = Object.values(formData).every((value) => !!value);
  
    if (formValid && Object.values(errors).every((error) => !error)) {
      console.log('Form submitted successfully');
      navigate('/profile', { state: { profileData: formData } });
    } else {
      console.log('Form validation failed');
      console.log(formData)
      Object.keys(formData).forEach(function(key) {
        validateField(key, formData[key])
        console.log('Key : ' + key + ', Value : ' + formData[key])
      })
    }
  };

  return (
    <div className="registration-form">
      <h2 className='headings'>PROFILE REGISTRATION</h2>
      <form onSubmit={handleSubmit}>
        <div className='formElement'>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
        <div className='formElement'>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className='formElement'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className='formElement'>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className='formElement'>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button className='headings' type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
