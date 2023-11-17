# Revised Political Campaign CRM Program

## Overview

This CRM system is designed to efficiently manage and track voters, their intentions, referrals, and requests for a political campaign. The back end of this system is implemented in Python using the SQLite3 database, while the front end uses the Tailwind CSS framework. The system includes an authentication system and is designed for cloud deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- SQLite3
- Node.js and npm

### Installing

1. Clone the repository
```
git clone https://github.com/yourusername/political-campaign-crm.git
```
2. Install Python dependencies
```
pip install -r requirements.txt
```
3. Install JavaScript dependencies
```
npm install
```
4. Run the application
```
python backend/main.py
```
## Usage

Navigate to the frontend directory and open the `index.html` file in your browser. Use the navigation bar to switch between different views (Voters, Requests, Map, Login).

## Documentation

For more details, refer to the complete documentation:

- [User Guide](docs/user_guide.md)
- [Technical Documentation](docs/technical_documentation.md)

## Deployment

This application is designed for cloud deployment. A Dockerfile is provided for building a Docker image of the application.

## Built With

- Python
- SQLite3
- HTML
- CSS (Tailwind)
- JavaScript

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.