import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addUser = (user) => {
    axios.post(API_URL, user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (user) => {
    axios.put(`${API_URL}/${user.id}`, user)
      .then(response => {
        setUsers(users.map(u => (u.id === user.id ? response.data : u)));
        setEditingUser(null);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      <UserForm 
        onAddUser={addUser} 
        onUpdateUser={updateUser} 
        user={editingUser} 
        setEditingUser={setEditingUser}
      />
      <UserList 
        users={users} 
        onEditUser={setEditingUser} 
        onDeleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
