```javascript
// AJAX function to handle CRUD operations
function ajax(url, method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(JSON.parse(xhr.responseText));
    }
    xhr.send(JSON.stringify(data));
}

// Function to add a voter
function addVoter() {
    var data = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value,
        instagram: document.getElementById('instagram').value,
        facebook: document.getElementById('facebook').value,
        keyIssues: document.getElementById('keyIssues').value,
        dataConsent: document.getElementById('dataConsent').value,
        address: document.getElementById('address').value,
        location: document.getElementById('location').value,
        referral: document.getElementById('referral').value,
        voteIntent: document.getElementById('voteIntent').value
    };
    ajax('/api/voters', 'POST', data, function(response) {
        if(response.status == 'success') {
            alert('Voter added successfully');
            location.reload();
        } else {
            alert('Failed to add voter');
        }
    });
}

// Function to remove a voter
function removeVoter(voterId) {
    ajax('/api/voters/' + voterId, 'DELETE', {}, function(response) {
        if(response.status == 'success') {
            alert('Voter removed successfully');
            location.reload();
        } else {
            alert('Failed to remove voter');
        }
    });
}

// Function to update a voter
function updateVoter(voterId) {
    var data = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value,
        instagram: document.getElementById('instagram').value,
        facebook: document.getElementById('facebook').value,
        keyIssues: document.getElementById('keyIssues').value,
        dataConsent: document.getElementById('dataConsent').value,
        address: document.getElementById('address').value,
        location: document.getElementById('location').value,
        referral: document.getElementById('referral').value,
        voteIntent: document.getElementById('voteIntent').value
    };
    ajax('/api/voters/' + voterId, 'PUT', data, function(response) {
        if(response.status == 'success') {
            alert('Voter updated successfully');
            location.reload();
        } else {
            alert('Failed to update voter');
        }
    });
}

// Function to get voter details
function getVoterDetails(voterId) {
    ajax('/api/voters/' + voterId, 'GET', {}, function(response) {
        if(response.status == 'success') {
            // Populate the form fields with the voter details
            document.getElementById('fullName').value = response.data.fullName;
            document.getElementById('dob').value = response.data.dob;
            document.getElementById('phoneNumber').value = response.data.phoneNumber;
            document.getElementById('email').value = response.data.email;
            document.getElementById('instagram').value = response.data.instagram;
            document.getElementById('facebook').value = response.data.facebook;
            document.getElementById('keyIssues').value = response.data.keyIssues;
            document.getElementById('dataConsent').value = response.data.dataConsent;
            document.getElementById('address').value = response.data.address;
            document.getElementById('location').value = response.data.location;
            document.getElementById('referral').value = response.data.referral;
            document.getElementById('voteIntent').value = response.data.voteIntent;
        } else {
            alert('Failed to get voter details');
        }
    });
}

// Function to filter voters
function filterVoters() {
    // Implement filtering logic here
}

// Function to sort voters
function sortVoters() {
    // Implement sorting logic here
}
```