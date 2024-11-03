import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';
import ProfileCard from '../components/ProfileCard';
import SearchStudents from '../components/SearchStudents';
import FacultyAdvisors from '../components/FacultyAdvisors';
import Navbar from '../components/NavBar';
import './StudentDashBoard.css';

function StudentDashboard() {
    const navigate = useNavigate();

    const [studentProfile, setStudentProfile] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [showGrade, setShowGrade] = useState(false);
    const [showAttendance, setShowAttendance] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await studentService.getStudentProfile();
                setStudentProfile(data);
            } catch (error) {
                console.error("Error fetching student profile:", error);
            }
        };
        fetchProfile();
    }, []);

    

    const studentData = [
        { name: 'Amith', department: 'Computer Science', year: 'Senior' },
        { name: 'Niveditha', department: 'Information Science', year: 'Junior' },
        { name: 'Chethana', department: 'AIML', year: 'Freshman' },
        { name: 'Ragu', department: 'Electronics', year: 'Sophomore' },
        { name: 'Prasad', department: 'Robotics', year: 'Senior' },
    ];

    const filteredStudents = studentData.filter((student) => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = departmentFilter ? student.department === departmentFilter : true;
        const matchesYear = yearFilter ? student.year === yearFilter : true;

        return matchesSearch && matchesDepartment && matchesYear;
    });

    return (
        <div className="dashboard-container">
            <Navbar />
            
            <div className="sidebar">
                <h2>Student Dashboard</h2>
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#search">Search Students</a></li>
                    <li><a href="#advisors">Faculty Advisors</a></li>
                </ul>
            </div>

            <div className="main-content">
                <h1>Student Dashboard</h1>

                {/* Profile Section */}
                <section id="profile" className="profile-section">
                    <h2>Profile</h2>
                    {studentProfile ? (
                        <ProfileCard profile={studentProfile} />
                    ) : (
                        <p>Loading profile...</p>
                    )}
                </section>

                

                {/* Search and Filter Students */}
                <section id="search" className="search-section">
                    <h2>Search Students</h2>
                    <div className="filters">
                        <div className="search-container">
                            <i className="fas fa-search search-icon"></i>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-bar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select className="filter-dropdown" onChange={(e) => setDepartmentFilter(e.target.value)}>
                            <option value="">Filter by Department</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Science">Information Science</option>
                            <option value="AIML">AIML</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Robotics">Robotics</option>
                        </select>
                        <select className="filter-dropdown" onChange={(e) => setYearFilter(e.target.value)}>
                            <option value="">Sort by</option>
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                    <SearchStudents onSearchResults={setSearchResults} />
                    {searchResults.length > 0 && (
                        <div className="search-results">
                            <h3>Search Results</h3>
                            <ul>
                                {searchResults.map((student) => (
                                    <li key={student.id}>
                                        {student.name} - {student.department} - {student.year}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="student-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.department}</td>
                                        <td>{student.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Faculty Advisors Section */}
                <section id="advisors" className="advisors-section">
                    <h2>Faculty Advisors</h2>
                    {studentProfile ? (
                        <FacultyAdvisors studentId={studentProfile.id} />
                    ) : (
                        <p>Loading faculty advisors...</p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default StudentDashboard;      //logout button should be on top  right side