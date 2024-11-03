// authService.js (Mock version)
const mockUsers = [
  { username: 'student1', password: 'password123', role: 'Student' },
  { username: 'faculty1', password: 'password123', role: 'Faculty' },
  { username: 'admin1', password: 'password123', role: 'Administrator' },
];

const login = (username, password, role) => {
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password && u.role === role
  );
  if (user) {
    localStorage.setItem('token', 'mockToken');
    localStorage.setItem('role', role);
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  window.location.href = '/';
};

const getToken = () => localStorage.getItem('token');

export default { login, logout, getToken };
