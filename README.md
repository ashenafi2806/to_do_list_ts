To-Do List Application
Project Description
This is a simple To-Do List web application built using TypeScript, HTML, and CSS. It allows users to:

Add new tasks with descriptions.

Edit existing tasks.

Remove tasks from the list.

The application demonstrates fundamental concepts such as DOM manipulation, event handling, and type safety using TypeScript interfaces. It provides a clean, user-friendly interface for managing daily tasks efficiently.

Features
Add tasks via an input field and "Add" button.

Edit tasks inline using a prompt dialog.

Remove tasks with a dedicated button.

Tasks are displayed dynamically in a list.

Simple and responsive UI for desktop and mobile devices.

Project Structure
text
/ (root folder)
├── index.html          # Main HTML file with input, buttons, and task list container
├── styles.css          # CSS file for styling the app (optional)
├── index.ts            # TypeScript source code with core logic
├── index.js            # Compiled JavaScript (generated from index.ts)
├── package.json        # (optional) if using npm for build tools
└── README.md           # Project documentation
Prerequisites
Node.js installed (if you want to compile TypeScript locally).

TypeScript installed globally or locally:

bash
npm install -g typescript
A modern web browser (Chrome, Firefox, Edge, Safari).

How to Run the Project
Option 1: Run directly in the browser (using precompiled JavaScript)
Make sure the index.html and index.js files are in the same folder.

Open index.html in your favorite web browser.

You can now add, edit, and remove tasks interactively.

Option 2: Compile TypeScript and run locally
Open a terminal and navigate to the project folder.

Compile the TypeScript file index.ts into JavaScript:

bash
tsc index.ts
This will generate index.js in the same folder.

Open index.html in a web browser.

Option 3: Use a local development server (recommended)
For better experience with live reload and serving files:

Install a simple HTTP server (e.g., live-server):

bash
npm install -g live-server
Run the server in your project directory:

bash
live-server
Your default browser will open the app, and changes will reload automatically.

Usage
Type a task description in the input box.

Click Add or press Enter to add the task.

Click edit next to a task to modify it.

Click remove to delete a task.

The task list updates dynamically.
✅adding task 
<img width="958" height="375" alt="adding_task" src="https://github.com/user-attachments/assets/51f7f8fb-1c18-44af-9e04-51e80ac77de8" />
✅editing task
<img width="944" height="388" alt="editing_task " src="https://github.com/user-attachments/assets/c574a9cf-ec80-4403-ad6c-56a4ae4915cd" />
✅deleting task

<img width="940" height="335" alt="deleting_task" src="https://github.com/user-attachments/assets/6f85a1b3-c3a3-475d-816c-52cd7c83b823" />



