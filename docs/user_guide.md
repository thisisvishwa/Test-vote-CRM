# User Guide

## Getting Started

1. Clone the repository to your local machine.
2. Install the required Python dependencies by running `pip install -r requirements.txt`.
3. Start the backend server by running `python backend/main.py`.
4. Open the `frontend/index.html` file in your web browser to access the CRM system.

## Using the CRM System

### Voters

1. **Add/Remove/Update Voters:** To add a new voter, click on the `addVoter` button and fill in the required fields. To update a voter's details, click on the `updateVoter` button next to the voter's name in the `voterList`. To remove a voter, click on the `deleteVoter` button next to the voter's name in the `voterList`.

2. **Track Referrals:** The `Referral` field in the voter details shows who referred the voter. This field is automatically updated when a new voter is added or an existing voter's details are updated.

3. **Voter List View:** The `voterList` shows all voters and their details. You can sort and filter this list using the `sortVoters` and `filterVoters` options.

### Voter Requests

4. **Add/Remove/Update Voter Requests:** To add a new request, click on the `addRequest` button and fill in the required fields. To update a request's details, click on the `updateRequest` button next to the request's name in the `requestList`. To remove a request, click on the `deleteRequest` button next to the request's name in the `requestList`.

5. **Request List and Kanban View:** The `requestList` shows all requests and their details. You can sort and filter this list using the `sortRequests` and `filterRequests` options. The kanban view can be accessed by clicking on the `kanbanView` button.

### Map View

6. **Map View of Voters:** The `mapView` shows all voters as points on the map. You can input a location and a radius using the `inputLocation` and `inputRadius` fields and view all voters within that radius. This view supports filtering based on voter attributes using the `filterMap` option.

### Authentication System

7. **User Login and Authentication:** To log in, enter your username and password in the `loginUser` form. If the login is successful, you will be redirected to the `index.html` page. If the login fails, an `authFailed` message will be displayed.

## Troubleshooting

If you encounter any issues while using the CRM system, please refer to the `docs/technical_documentation.md` file for more information. If the issue persists, please open an issue on the GitHub repository.