// FacultyAdvisors.js
import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';

function FacultyAdvisors({ studentId }) {
  const [advisors, setAdvisors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        setLoading(true);
        const data = await studentService.getFacultyAdvisors(studentId);
        setAdvisors(data);
      } catch (err) {
        setError('Failed to load faculty advisors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchAdvisors();
    }
  }, [studentId]);

  if (loading) {
    return <div>Loading faculty advisors...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Contact Faculty Advisors</h2>
      {advisors.length === 0 ? (
        <p>No faculty advisors assigned.</p>
      ) : (
        <ul>
          {advisors.map((advisor) => (
            <li key={advisor.id}>
              <p><strong>Name:</strong> {advisor.name}</p>
              <p>
                <strong>Email:</strong> <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href={`tel:${advisor.phone}`}>{advisor.phone}</a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FacultyAdvisors;
