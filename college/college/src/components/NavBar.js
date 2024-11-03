import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ role }) {
  return (
    <nav className="navbar">
      <ul>
        
        {role === 'Student' && <li><Link to="/student">Profile</Link></li>}
        {role === 'Faculty' && <li><Link to="/faculty">Class List</Link></li>}
        {role === 'Administrator' && <li><Link to="/admin">Admin Dashboard</Link></li>}
      </ul>
      <button className="logout-button" onClick={() => (window.location.href = '/')}>
        Logout
      </button>
    </nav>
  );
}

export default NavBar;
