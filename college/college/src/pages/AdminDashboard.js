// src/AdminDashboard.js
import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';
import FacultyForm from '../components/FacultyForm';
import StudentList from '../components/StudentList';
import FacultyList from '../components/FacultyList';
import { Line, Doughnut } from 'react-chartjs-2';
import './AdminDashboard.css';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [enrollmentData, setEnrollmentData] = useState([50, 70, 90, 100, 80]); // Mock data
  const [facultyData, setFacultyData] = useState([2, 3, 5, 4]); // Mock data

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const addFaculty = (facultyMember) => {
    setFaculty([...faculty, facultyMember]);
  };

  const updateFaculty = (updatedFaculty) => {
    setFaculty(faculty.map((member) => (member.id === updatedFaculty.id ? updatedFaculty : member)));
  };

  const deleteFaculty = (id) => {
    setFaculty(faculty.filter((member) => member.id !== id));
  };

  const enrollmentChartData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: enrollmentData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const facultyChartData = {
    labels: ['Course A', 'Course B', 'Course C', 'Course D'],
    datasets: [
      {
        label: 'Faculty Course Loads',
        data: facultyData,
        backgroundColor: [
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="#manage">Manage Student</a></li>
          <li><a href="#trends">Student Enrollment Trends</a></li>
          <li><a href="#loads">Faculty Course Loads</a></li>
          <li><a href="#managef">Manage Faculty</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Administrator Dashboard</h1>
        
        {/* Student Management Section */}
        <div className="section">
          <h2>Manage Students</h2>
          <StudentForm addStudent={addStudent} />
          <StudentList students={students} updateStudent={updateStudent} deleteStudent={deleteStudent} />
        </div>

        {/* Graphs Section */}
        <div className="charts-container">
          <div className="chart" style={{ height: '250px' }}>
            <h2>Student Enrollment Trends</h2>
            <Line data={enrollmentChartData} options={chartOptions} />
          </div>
          <div className="chart" style={{ height: '250px' }}>
            <h2>Faculty Course Loads</h2>
            <Doughnut data={facultyChartData} options={chartOptions} />
          </div>
        </div>

        {/* Faculty Management Section */}
        <div className="section">
          <h2>Manage Faculty</h2>
          <FacultyForm addFaculty={addFaculty} />
          <FacultyList faculty={faculty} updateFaculty={updateFaculty} deleteFaculty={deleteFaculty} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
