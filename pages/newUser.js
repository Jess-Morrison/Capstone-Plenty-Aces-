import React from 'react';
import UserForm from '../components/forms/userForm';

export default function NewUser() {
  return (
    <div className="create-userForm" style={{ height: '45rem', padding: '10%' }}>
      <UserForm />
    </div>
  );
}
