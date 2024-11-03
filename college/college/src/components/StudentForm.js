import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      department,
      year,
    };
    addStudent(newStudent);
    setName('');
    setDepartment('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" required />
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
