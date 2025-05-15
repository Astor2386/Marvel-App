# Marvel Character App

A web application that allows users to explore, create, edit, and delete Marvel characters. 
The app features a Flask backend for managing character data and a React frontend with a Marvel-themed design, including a vibrant background displaying a Marvel logo 
and solid white content containers for readability.

## Project Overview

This project is a full-stack web application built with:
- **Backend**: Flask (Python) to handle API endpoints for character management.
- **Frontend**: React (JavaScript) to provide an interactive user interface.
- **Styling**: React Bootstrap for responsive layouts and custom CSS for theming.

The app allows users to:
- View a list of Marvel characters with images and aliases.
- View detailed character information, including powers and alignment.
- Create new characters with a form.
- Edit existing characters.
- Delete characters.
- Navigate a responsive, Marvel-themed interface with a bright background image (`images/Marvel.jpg`).

## Project Structure

- app.py: The Flask backend application, providing API endpoints for CRUD operations on characters.
- requirements.txt: Python dependencies for the backend.
- frontend/: The React frontend directory.
- src/: React components, styles, and app logic.
- public/: "marvel.jpg" for the background and default React files (e.g., favicon, manifest).
- .gitignore: Excludes unnecessary files (e.g., `node_modules`, `venv`).
- README.md not available in app, added separately in github

## Setup Instructions

### Prerequisites
- Node.js and npm: Required for the React frontend. 
- Python 3 and pip: Required for the Flask backend. 
- Git: To clone the repository. 

### Step 1: Clone the Repository
Clone this repository to your local machine:
git clone https://github.com/Astor23/Marvel-App.git
cd m7project

### Step 2: Set Up the Backend (Flask)
cd path/to/m7project
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On Mac/Linux (not 100%, I don't use a Mac)
pip install -r requirements.txt
pip install flask
flask run
Keep the terminal open 

### Step 3: Set Up the Frontend (React)
Open a New Terminal and Navigate to the Frontend Directory:
cd path/to/m7project/frontend

Install Dependencies:
npm install

Start the React Frontend:
npm start

The frontend will run on localhost and open in your browser. 

Step 4: Use the App
Access the App: Open your browser and go to http://localhost

Explore App:
Home Page: View the welcome page with a link to the character list.

Character List: See a list of characters with images and aliases.

Character Detail: View detailed character info, edit, or delete a character.

Create/Edit Character: Add or modify characters using a form.

Not Found: Displays a 404 page for invalid routes.

Features
Responsive Design: Built with React Bootstrap for a mobile-friendly layout.

Marvel Theme: A bright marvel.jpg background with solid white content containers for readability.

CRUD Operations:
Create: Add new characters with a form.

Read: View character lists and details.

Update: Edit existing characters.

Delete: Remove characters with a confirmation prompt.

Image Sizing: Character images in the detail view are scaled appropriately without cropping.

### Special notes
- A Figma prototype was created for this project.
-Worth noting, the backend utilized MYSQL Workbench. The initialization of React caused an automatic Git repository to be created, and took time to learn how to take it off the front-end, and be able to upload to the repository used for the class.
Hopefully without going through the .gitattributes and line endings, it runs properly. It should, but there might be an issue with that. Otherwise, great project, very happy with the end product.
