College Directory Application
Overview
The College Directory Application is a web-based system developed to streamline the management and accessibility of personal and academic information for students, faculty, and administrators. Built with Spring Boot and a PostgreSQL database, this application provides role-based access, RESTful APIs, and a front-end in React (or HTML/CSS/JavaScript).

Features
Role-Based Access Control: Separate views and permissions for students, faculty, and administrators.
Student Management: View, create, and update student profiles.
Faculty Management: Access faculty details and course load information.
Enrollment Tracking: Visualize trends in student enrollment.
Dashboard Visualization: Interactive charts for key data points (enrollment trends, faculty workload).
API Endpoints: RESTful endpoints for each functionality.
Data Validation: Input validation for secure and reliable data handling.
Logging and Exception Handling: Includes error handling and activity logging.
Tech Stack
Back-end: Spring Boot, Hibernate, Spring MVC, Spring HATEOAS, Spring Security
Front-end: React (or HTML/CSS/JavaScript)
Database: PostgreSQL
Other Libraries: Chart.js or D3.js for data visualization (if applicable)
Installation
Prerequisites
Java 11+
Maven
PostgreSQL
Steps
Clone the repository:
git clone https://github.com/username/CollegeDirectoryApp.git
cd CollegeDirectoryApp

Set up PostgreSQL Database:

Create a database named college_directory.
Update database settings in src/main/resources/application.properties.
Build the Project:


mvn clean install
Run the Application:


mvn spring-boot:run
Access the Application:

Open a browser and go to http://localhost:8080.
API Documentation
The following endpoints are provided as examples.

Students
POST /api/students - Create a new student profile.
GET /api/students/{id} - Retrieve student profile by ID.
PUT /api/students/{id} - Update student profile by ID.
DELETE /api/students/{id} - Delete student profile by ID.
Faculty
GET /api/faculty - Retrieve list of all faculty.
GET /api/faculty/{id} - Retrieve faculty details by ID.
Admin
GET /api/admin/summary - Retrieve a summary of college data.
POST /api/admin/users - Create a new user account.
For more details, refer to the API documentation at /swagger-ui.html (if Swagger is configured).

Database Design
User: Stores details of users with different roles (Student, Faculty, Admin).
StudentProfile: Contains student-specific information.
FacultyProfile: Contains faculty-specific information.
Enrollment: Stores enrollment records for students.
Configuration Details
application.properties
properties
Copy code
# Database configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/college_directory
spring.datasource.username=yourUsername
spring.datasource.password=yourPassword

# JPA configuration
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
Common Issues
Detached Entity Error
When saving a StudentProfile entity that references a User, ensure the User entity is managed by the EntityManager, typically by retrieving it via find or getReference before associating it with the StudentProfile.

Contribution
Feel free to fork this repository, open an issue, or submit a pull request if you want to improve the application.

## Demo
[Watch the Demo Video](https://drive.google.com/file/d/1YxQwB5zAPGuPcKYTbw-QPVRMiOheWOxP/view?usp=drivesdk )


License
This project is licensed under the MIT License. See the LICENSE file for details.
