import React from 'react';

function StudentList({ students, updateStudent, deleteStudent }) {
  const handleDelete = (id) => {
    deleteStudent(id);
  };

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.department} - {student.year}
          <button onClick={() => updateStudent({ ...student, name: prompt("Update name:", student.name) })}>
            Edit
          </button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
