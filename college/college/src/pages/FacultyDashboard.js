import React, { useEffect, useState } from 'react';
import facultyService from '../services/facultyService';
import ClassList from '../components/ClassList';
import UpdateProfile from '../components/UpdateProfile';
import './FacultyDashboard.css';

function FacultyDashboard() {
  const [facultyId, setFacultyId] = useState(1); // Replace with logic to get actual faculty ID
  const [facultyProfile, setFacultyProfile] = useState(null);

  useEffect(() => {
    const fetchFacultyProfile = async () => {
      try {
        const profileData = await facultyService.getFacultyProfile(facultyId);
        setFacultyProfile(profileData);
      } catch (error) {
        console.error("Error fetching faculty profile:", error);
      }
    };

    fetchFacultyProfile();
  }, [facultyId]);

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="#fprofile">Profile</a></li>
          <li><a href="#update">Update Profile</a></li>
          <li><a href="#class">Class List</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <h1>Faculty Dashboard</h1>

        {/* Faculty Profile Section */}
        <section id="fprofile" className="profile-section">
          <h2>Faculty Profile</h2>
          {facultyProfile ? (
            <div className="faculty-profile">
              <h3>{facultyProfile.name}</h3>
              <p>Email: {facultyProfile.contact}</p>
              <p>Phone: {facultyProfile.phone}</p>
              <p>Office Hours: {facultyProfile.officeHours}</p>
            </div>
          ) : (
            <p>Loading faculty profile...</p>
          )}
        </section>

        {/* Update Profile Section */}
        <section id="update" className="update-section">
          <h2>Update Profile</h2>
          <UpdateProfile facultyId={facultyId} />
        </section>

        {/* Class List Section */}
        <section id="class" className="class-list-section">
          <h2>Class List</h2>
          <ClassList facultyId={facultyId} />
        </section>
      </div>
    </div>
  );
}

export default FacultyDashboard;
