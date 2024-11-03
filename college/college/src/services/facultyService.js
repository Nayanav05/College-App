// facultyService.js (Mock version)
const mockClassList = [
  { id: 1, name: 'John Doe', photo: 'path/to/photo.jpg', contact: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', photo: 'path/to/photo2.jpg', contact: 'janesmith@example.com' },
];

const mockFacultyProfile = {
  id: 1,
  name: 'Dr. Alice',
  officeHours: 'MWF 10-12',
  contact: 'alice@example.com',
  phone: '123-456-7890',
};

// Function to get the class list for a specific faculty member
const getClassList = async (facultyId) => {
  // In a real scenario, you would filter by facultyId; here we return all for simplicity
  return mockClassList; 
};

// Function to get a faculty profile
const getFacultyProfile = async (facultyId) => {
  // Return the mock faculty profile, ideally, you would filter by facultyId
  return mockFacultyProfile; 
};

// Function to update the faculty profile
const updateProfile = async (facultyId, profileData) => {
  // Update the mock faculty profile with the new data from the input form
  Object.assign(mockFacultyProfile, profileData); 
  return mockFacultyProfile; // Return the updated profile
};

// Exporting the functions for use in other components
export default { getClassList, getFacultyProfile, updateProfile };
