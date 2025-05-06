import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; 

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUser(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="title">👥 User Directory</h1>
      <div className="user-grid">
        {listOfUser.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>📧 Email:</strong> {user.email}</p>
            <p><strong>📞 Phone:</strong> {user.phone}</p>
            <p><strong>🌐 Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            <p><strong>🏙️ City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
