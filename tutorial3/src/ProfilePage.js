import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePageStyle.css';

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  return (
    <div className="profile-page"> {}
      <h2 className='headings'>PROFILE PAGE</h2>
      {profileData && (
        <>
          <p className='elements'>First Name: {profileData.firstName}</p>
          <p className='elements'>Last Name: {profileData.lastName}</p>
          <p className='elements'>Email: {profileData.email}</p>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
