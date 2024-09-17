import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default UserItem;
