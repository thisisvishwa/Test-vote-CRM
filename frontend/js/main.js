// Importing necessary modules
import { loginUser, logoutUser } from './login.js';
import { addVoter, removeVoter, updateVoter, getVoterDetails, filterVoters, sortVoters } from './voters.js';
import { addRequest, removeRequest, updateRequest, getRequestDetails, filterRequests, sortRequests } from './requests.js';
import { showMapView, filterMap } from './map.js';

// Event listeners for authentication
document.getElementById('loginUser').addEventListener('click', loginUser);
document.getElementById('logoutUser').addEventListener('click', logoutUser);

// Event listeners for voter operations
document.getElementById('addVoter').addEventListener('click', addVoter);
document.getElementById('removeVoter').addEventListener('click', removeVoter);
document.getElementById('updateVoter').addEventListener('click', updateVoter);
document.getElementById('getVoterDetails').addEventListener('click', getVoterDetails);
document.getElementById('filterVoters').addEventListener('click', filterVoters);
document.getElementById('sortVoters').addEventListener('click', sortVoters);

// Event listeners for request operations
document.getElementById('addRequest').addEventListener('click', addRequest);
document.getElementById('removeRequest').addEventListener('click', removeRequest);
document.getElementById('updateRequest').addEventListener('click', updateRequest);
document.getElementById('getRequestDetails').addEventListener('click', getRequestDetails);
document.getElementById('filterRequests').addEventListener('click', filterRequests);
document.getElementById('sortRequests').addEventListener('click', sortRequests);

// Event listeners for map view
document.getElementById('showMapView').addEventListener('click', showMapView);
document.getElementById('filterMap').addEventListener('click', filterMap);