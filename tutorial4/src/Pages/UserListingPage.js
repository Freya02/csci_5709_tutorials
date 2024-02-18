import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/UserListingPageStyle.css';

const UserListingPage = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUsers() {
          try {
            const response = await axios.get('https://express-t4.onrender.com/api/users');
            setUsers(response.data);
          } catch (error) {
            console.error('Failed to load users data:', error);
          }
        }
        fetchUsers();
      }, []);


    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    const handleUserClick = (userId) => {
        navigate(`/profile/${userId}`);
      };

    return(
      <div className='user-listing-page'>
      <h2 className='headings'>USER PROFILES</h2>
      <div className='search-bar-container'>
      <input type="text" 
            placeholder="Search by user first and last name.." 
            value={searchQuery} 
            onChange={handleSearch} />
      </div>

      <div className="user-listing-container">
        {filteredUsers.map(user => (
          <div className="card" key={user._id} onClick={() => handleUserClick(user._id)}>
          <img src={user.picture} alt={`${user.name}'s profile`} />
          <div className="card-content">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p className="description">{user.about}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
    
}

export default UserListingPage;
