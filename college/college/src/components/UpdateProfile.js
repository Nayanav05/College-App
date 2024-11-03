import React, { useEffect, useState } from 'react';
import facultyService from '../services/facultyService';

function UpdateProfile({ facultyId }) {
  const [profile, setProfile] = useState({
    officeHours: '',
    contact: '',
    phone: '',
  });
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await facultyService.getFacultyProfile(facultyId);
      setProfile({
        officeHours: data.officeHours,
        contact: data.contact,
        phone: data.phone,
      });
    };
    fetchProfile();
  }, [facultyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await facultyService.updateProfile(facultyId, profile);
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Error updating profile.');
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Office Hours:</label>
          <input
            type="text"
            name="officeHours"
            value={profile.officeHours}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Email:</label>
          <input
            type="email"
            name="contact"
            value={profile.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
