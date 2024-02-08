import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePageStyle.css';

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  return (
    <div className="profile-page"> {}
      <h2>Profile Page</h2>
      {profileData && (
        <>
          <p>First Name: {profileData.firstName}</p>
          <p>Last Name: {profileData.lastName}</p>
          <p>Email: {profileData.email}</p>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
