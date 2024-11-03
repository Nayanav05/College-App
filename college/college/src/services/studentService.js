// studentService.js (Mock version)
const mockStudentProfile = {
  id: 1,
  name: 'John Doe',
  photo: 'path/to/photo.jpg',
  contact: 'johndoe@example.com',
  courses: [{ name: 'Math 101', grade: 'A' }, { name: 'Science 101', grade: 'B+' }],
  attendance: 95,
};

const mockStudents = [
  { id: 1, name: 'John Doe', department: 'Computer Science', year: 'Sophomore' },
  { id: 2, name: 'Jane Smith', department: 'Engineering', year: 'Junior' },
  { id: 3, name: 'Alice Brown', department: 'Mathematics', year: 'Freshman' },
];

// Function to get a single student profile
const getStudentProfile = async () => {
  return mockStudentProfile; // Return the mock profile
};

// Function to search students based on filters
const searchStudents = async (filters) => {
  return mockStudents.filter((student) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // No filter applied
      return student[key].toString().toLowerCase().includes(filters[key].toLowerCase());
    });
  });
};

// Function to get faculty advisors (mock implementation)
const getFacultyAdvisors = async (studentId) => {
  return [
    { id: 1, name: 'Dr. Alice', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Prof. Bob', email: 'bob@example.com', phone: '098-765-4321' },
  ];
};

// Exporting the functions so they can be used in other files
export default { getStudentProfile, searchStudents, getFacultyAdvisors };
