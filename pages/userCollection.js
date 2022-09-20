import React from 'react';
import UserBtnFilter from '../components/userBtnFilter';
import CollectionBar from '../components/collectionBar';

export default function UserCollection() {
  return (
    <div className="text-center my-4">
      <div style={{ margin: '5rem' }}>
        <CollectionBar />
      </div>

      <UserBtnFilter />

    </div>
  );
}
