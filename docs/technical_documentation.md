# Technical Documentation

## Overview

This document provides a technical overview of the Revised Political Campaign CRM Program. The program is designed to manage and track voters, their intentions, referrals, and requests for a political campaign.

## Backend

The backend of the system is implemented in Python using the SQLite3 database. The main files are:

- `main.py`: This is the main entry point of the backend. It initializes the database and starts the server.
- `database.py`: This file contains all the database operations such as creating tables, inserting data, updating data, and deleting data.
- `voter.py`: This file contains the Voter class and its methods for performing CRUD operations on voter records.
- `request.py`: This file contains the Request class and its methods for performing CRUD operations on voter requests.
- `authentication.py`: This file handles user authentication.

## Frontend

The frontend of the system is built with HTML, CSS (Tailwind), and JavaScript. The main files are:

- `index.html`: This is the main entry point of the frontend. It includes links to other HTML files and the main JavaScript and CSS files.
- `voters.html`: This file displays the list of voters and allows users to perform CRUD operations on voter records.
- `requests.html`: This file displays the list of voter requests and allows users to perform CRUD operations on voter requests.
- `map.html`: This file displays a map view of voters.
- `login.html`: This file handles user login.

The JavaScript files (`main.js`, `voters.js`, `requests.js`, `map.js`, `login.js`) handle the interactive elements of the frontend, such as form submissions and AJAX requests to the backend.

The CSS file (`styles.css`) contains the styles for the frontend, using the Tailwind CSS framework.

## Deployment

The system is designed for cloud deployment, specifically on Digital Ocean. The `Dockerfile` contains the instructions for building the Docker image of the system.

## Documentation

The `user_guide.md` provides a user guide for the system, while this file (`technical_documentation.md`) provides the technical documentation.

## Dependencies

The Python dependencies of the system are listed in the `requirements.txt` file. The main dependency is SQLite3 for the database operations.

## Version Control

The `.gitignore` file specifies the files and directories that should be ignored by Git. This includes the `__pycache__` directories, the `.pyc` files, and the SQLite database file.