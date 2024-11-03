import React, { useState } from 'react';
import authService from '../services/authService';
import './LoginPage.css'
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const isAuthenticated = await authService.login(username, password, role);
      if (isAuthenticated) {
        window.location.href = `/${role.toLowerCase()}`;
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Error logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>College Directory Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty Member</option>
          <option value="Administrator">Administrator</option>
        </select>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LoginPage;
