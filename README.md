SWYNEX-Student-MANAGER

Project Architecture Document

1. Project Overview

The Student Task Manager is a web application designed to help students organize academic tasks, manage assignment deadlines, and track task completion.

2. Objectives

- Organize academic tasks in one place.
- Manage assignment deadlines.
- Track pending and completed tasks.
- Provide a simple and user-friendly dashboard.

3. Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js with Express.js
- Database: SQLite
- API Style: REST API
- Version Control: Git and GitHub

4. Data Models

Student

- student_id: Unique identifier
- name: Student's name
- email: Student's email address

Task

- task_id: Unique identifier
- student_id: Associated student ID
- title: Task title
- description: Task details
- due_date: Task deadline
- status: Pending or Completed
- created_at: Task creation date

5. API Routes

Method| Endpoint| Purpose
GET| /api/tasks| Retrieve all tasks
GET| /api/tasks/:id| Retrieve a specific task
POST| /api/tasks| Create a new task
PUT| /api/tasks/:id| Update a task
DELETE| /api/tasks/:id| Delete a task

6. Frontend Screens

1. Dashboard: Displays task summaries.
2. Task List: Displays all tasks and statuses.
3. Add Task: Adds new tasks and deadlines.
4. Edit Task: Updates existing tasks.
5. Task Details: Displays selected task information.

7. System Architecture

The application follows a three-layer architecture.

- Presentation Layer: HTML, CSS, and JavaScript.
- Application Layer: Node.js and Express.js.
- Data Layer: SQLite database.

Data Flow: User Interface → REST API → Backend Logic → Database.

8. Security and Validation

- Validate required fields before saving tasks.
- Validate API requests and task IDs.
- Use parameterized database queries.
- Protect personal information and implement authentication for multiple users.

9. Future Enhancements

- User registration and login.
- Task reminders and notifications.
- Search and filter functionality.
- Calendar integration.
- Responsive mobile-friendly interface.

10. Conclusion

The Student Task Manager aims to help students organize academic work efficiently. Its modular architecture supports easier maintenance, testing, and future improvements.
