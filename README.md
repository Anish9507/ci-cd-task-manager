# CI/CD Task Manager

## Objective

This project demonstrates the implementation of CI/CD workflows using
GitHub Actions along with Agile Sprint Retrospectives.

## Project Description

A simple Task Manager web application is used as the sample application
for demonstrating the CI/CD pipeline.

The main focus of the project is not the Task Manager itself, but the
automation of testing, build verification, and deployment.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Git
- GitHub
- GitHub Actions
- Render
- Jest
- Supertest

## CI/CD Workflow

The implemented workflow is:

Developer
    ↓
Git Push
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Run Automated Tests
    ↓
Build Verification
    ↓
Deployment
    ↓
Live Application

## Continuous Integration

GitHub Actions automatically runs whenever code is pushed to the
main branch or a Pull Request is created.

The CI workflow performs:

1. Checkout source code
2. Setup Node.js
3. Install dependencies
4. Run automated tests
5. Verify the build

If the tests fail, the workflow stops.

## Continuous Deployment

After successful verification, the application is deployed and made
available online.

### Live Application

https://ci-cd-task-manager.onrender.com/

## Agile Retrospectives

### Sprint 1

**Sprint Goal:**  
Develop the basic Task Manager application.

**What went well?**
- Basic application was completed.
- Backend and frontend were connected.

**What did not go well?**
- Testing was performed manually.

**Improvement:**
- Introduce automated testing using GitHub Actions.

### Sprint 2

**Sprint Goal:**  
Implement CI/CD automation.

**What went well?**
- Automated tests were successfully configured.
- GitHub Actions runs automatically after code changes.

**What did not go well?**
- Deployment initially required manual steps.

**Improvement:**
- Automate application deployment.

## Result

The project successfully demonstrates how CI/CD automates the software
development process and how Agile retrospectives help identify and
implement improvements in subsequent sprints.

## Conclusion

The project demonstrates:

- Version control using Git and GitHub
- Continuous Integration using GitHub Actions
- Automated testing
- Build verification
- Continuous Deployment
- Agile Sprint Retrospectives
