import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User({ data }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${data}`);
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, [data]);

  if (error) {
    return (
      <div className="profile_card">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div className="profile_card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div className="profile_card">
          <h2>No User</h2>
        </div>
      )}
    </div>
  );
}

export default User;
