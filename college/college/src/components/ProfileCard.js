// ProfileCard.js
import React from 'react';

function ProfileCard({ profile }) {
  return (
    <div>
      <h2>{profile.name}</h2>
      <h4><img src={profile.photo} alt={`${profile.name}'s profile`} />
      <p>Contact: {profile.contact}</p>
      <p>Attendance: {profile.attendance}%</p></h4>
      {/* No Courses section here */}
    </div>
  );
}

export default ProfileCard;
