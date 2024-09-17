import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem 
          key={user.id} 
          user={user} 
          onEdit={() => onEditUser(user)} 
          onDelete={() => onDeleteUser(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
