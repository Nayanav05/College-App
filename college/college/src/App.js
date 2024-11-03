import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/administrator" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
