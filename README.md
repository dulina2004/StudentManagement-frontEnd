# Project Title

A brief description of what this project does and who it's for

# 📚 Student Management System - Front End

![License](https://img.shields.io/badge/license-MIT-green)  
A modern front-end interface for managing student data, built using **HTML, CSS, JavaScript**, and **EmailJS** for seamless email communication.

---

## 🎨 Features

-   **📡 Fetch API Integration**: Robust interaction with back-end APIs using JavaScript's **Fetch API** to handle student data.
-   **📧 EmailJS Integration**: Effortless email notifications directly from the front end, no server-side configuration needed.
    -   **Student Registration Confirmation**
    -   **Report Submission Alerts**

---

## 🚀 Getting Started

Follow these instructions to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-management-system-frontend.git
```

🛠️ Tech Stack
HTML5: Structure and layout.
CSS3: Styling and responsiveness.
JavaScript: Logic and API requests.
EmailJS: Email service integration without server-side code.

📡 Fetch Operations
The front end communicates with a Spring Boot back-end system using Fetch API for handling various operations:

GET: Retrieve student data and display it in a table.
POST: Add new students to the system.
PUT: Edit existing student records.
DELETE: Remove student entries from the database.

📧 EmailJS Integration
This project uses EmailJS for sending automated emails. Whether it's a registration confirmation or an assignment submission notification, all email communications happen directly from the front end.

How EmailJS Works:
Sign up at EmailJS.
Create a service and email template.
Replace the placeholders in the JavaScript snippet with your own Service ID and Template ID.

```bash
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formElement)
  .then(response => {
    console.log('SUCCESS!', response.status, response.text);
  }, error => {
    console.error('FAILED...', error);
  });

```

📂 Project Structure

```bash
📦 student-management-system-frontend
┣ 📜 style.css # Main CSS file
┣ 📜 main.js # Fetch operations and EmailJS logic
┣ 📜 index.html # Main HTML page
┗ 📜 README.md # Project overview

```

### 2. Clone the Repository for backend

```bash
git clone https://github.com/dulina2004/StudentManagement-BackEnd--Springboot.git
```

## 🎨 Screenshots

![alt text](<Screenshot 2024-09-23 143047.png>)
![alt text](<Screenshot 2024-09-23 143107.png>)
![alt text](<Screenshot 2024-09-23 143121.png>)
![alt text](<Screenshot 2024-09-23 143203.png>)
![alt text](<Screenshot 2024-09-23 143231.png>)
