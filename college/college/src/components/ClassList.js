// ClassList.js
import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';

function ClassList({ facultyId }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchClassList = async () => {
      const data = await studentService.getClassList(facultyId); // Make sure this function is implemented in your service
      setStudents(data);
    };

    if (facultyId) {
      fetchClassList();
    }
  }, [facultyId]);

  return (
    <div>
      <h2>Class List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <img src={student.photo} alt={student.name} style={{ width: 50, height: 50 }} />
              </td>
              <td>{student.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;
