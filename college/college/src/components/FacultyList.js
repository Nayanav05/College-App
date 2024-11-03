import React from 'react';

function FacultyList({ faculty, updateFaculty, deleteFaculty }) {
  const handleDelete = (id) => {
    deleteFaculty(id);
  };

  return (
    <ul>
      {faculty.map((member) => (
        <li key={member.id}>
          {member.name} - {member.department} - {member.contact}
          <button onClick={() => updateFaculty({ ...member, name: prompt("Update name:", member.name) })}>
            Edit
          </button>
          <button onClick={() => handleDelete(member.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default FacultyList;
