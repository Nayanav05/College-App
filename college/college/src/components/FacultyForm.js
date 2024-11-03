import React, { useState } from 'react';

function FacultyForm({ addFaculty }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFaculty = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      department,
      contact,
    };
    addFaculty(newFaculty);
    setName('');
    setDepartment('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" required />
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" required />
      <button type="submit">Add Faculty</button>
    </form>
  );
}

export default FacultyForm;
