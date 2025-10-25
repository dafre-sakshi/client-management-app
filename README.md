# Client Management Project
This project is built as part of the **Phase-End Project**.  
It is a **frontend Angular application** to manage clients and their meetings.  
The database is in **MySQL**, Agile tasks are tracked in **Jira**, BDD scenarios are written in **Gherkin**, and the project is version-controlled with **GitHub**.

## 🎯 Objectives
- Manage client details (name, email, phone).
- Manage client meetings (date, time, agenda).
- Build a responsive UI in Angular.
- Create a MySQL database schema.
- Track tasks in Jira (Agile).
- Write BDD scenarios in Gherkin.
- Push project to GitHub (Task 10).

## 📂 Project Structure
client-management-app/
├─ src/                 # Angular source code
├─ angular.json         # Angular config
├─ package.json         # npm dependencies
├─ db/
│   └─ client_app.sql   # Database creation script
├─ screenshots/         # Screenshots for submission
├─ README.md            # Documentation
└─ .gitignore

## 🚀 How to Run the Angular App

### Install Prerequisites
- Node.js (LTS)
- Angular CLI
- MySQL Community Server

### Run Commands
npm install
ng serve

## 🗄️ Database Setup
1. Open MySQL Workbench.
2. Run `db/client_app.sql`.
3. This will create database `client_app` with tables:
   - clients
   - meetings

## 🔗 GitHub (Task 10)

git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/client-management-app.git
git push -u origin main

## ✅ Submission
- Project is zipped as `client-management-app.zip`
- Contains:
  - Angular source
  - SQL script
  - Screenshots
  - README.md


