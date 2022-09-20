import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/userData';
import Users from './users';

export default function MultiUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    users.map((user) => (
      <div className="d-flex flex-wrap">
        <Users key={user.firebaseKey} userObj={user} />
      </div>
    ))
  );
}
