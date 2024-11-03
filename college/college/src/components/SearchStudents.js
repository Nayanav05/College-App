// SearchStudents.js
import React, { useState } from 'react';
import studentService from '../services/studentService'; // Ensure this is available

function SearchStudents({ onSearchResults }) {
  const [filters, setFilters] = useState({
    name: '',
    department: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    const results = await studentService.searchStudents(filters);
    onSearchResults(results); // Pass results back to parent
  };

  return (
    <div>
      <h2>Search for Other Students</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={filters.department}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={filters.year}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchStudents;
