import React, { useState, useEffect } from 'react';

const UserForm = ({ onAddUser, onUpdateUser, user, setEditingUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      onUpdateUser(formData);
    } else {
      onAddUser(formData);
    }
    setFormData({
      name: '',
      email: '',
    });
    setEditingUser(null);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
        required
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required
      />
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
