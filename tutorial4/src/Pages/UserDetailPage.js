import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../CSS/UserDetailsPageStyle.css';

const UserDetailPage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () =>  {
          try {
            const response = await axios.get(`https://express-t4.onrender.com/api/users/${userId}`);
            setUser(response.data);
          } catch (error) {
            console.error('Failed to load user data:', error);
          }
        };
        fetchUser();
      }, [userId]);


    if (!user) {
        return <div>Loading...</div>;
    }
    return(
      <div className="user-page"> 
      <h2 className='user-heading'>USER DETAIL</h2>
        <div className='user-image'>
          <img src={user.picture} alt={`${user.name}'s profile`} />
          </div>
            <p className='user-elements'>Name: {user.name}</p>
            <p className='user-elements'>Greeting: {user.greeting}</p>
            <p className='user-elements'>Gender: {user.gender}</p>
            <p className='user-elements'>Age: {user.age}</p>
            <p className='user-elements'>Eye Color: {user.eyeColor}</p>
            <p className='user-elements'>Company: {user.company}</p>
            <p className='user-elements'>About: {user.about}</p>
            <p className='user-elements'>Favorite Fruit: {user.favoriteFruit}</p>
            <p className='user-elements'>Email: {user.email}</p>
            <p className='user-elements'>Phone: {user.phone}</p>
            <p className='user-elements'>Address: {user.address}</p>
            <p className='user-elements'>Tags: {user.tags.join(', ')}</p>
            <p className='user-elements'>Friends: {user.friends.map(friend => friend.name).join(', ')}</p>
    </div>

    )

}

export default UserDetailPage;