```javascript
// AJAX function to handle requests
function ajaxRequest(url, method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(JSON.parse(xhr.responseText));
    }
    xhr.send(JSON.stringify(data));
}

// Function to add a request
function addRequest() {
    var data = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        associatedVoter: document.getElementById('associatedVoter').value,
        dateSubmitted: document.getElementById('dateSubmitted').value,
        location: document.getElementById('location').value,
        status: document.getElementById('status').value
    };
    ajaxRequest('/requests', 'POST', data, function(response) {
        alert('Request added');
    });
}

// Function to remove a request
function removeRequest() {
    var requestId = document.getElementById('requestId').value;
    ajaxRequest('/requests/' + requestId, 'DELETE', {}, function(response) {
        alert('Request removed');
    });
}

// Function to update a request
function updateRequest() {
    var requestId = document.getElementById('requestId').value;
    var data = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        associatedVoter: document.getElementById('associatedVoter').value,
        dateSubmitted: document.getElementById('dateSubmitted').value,
        location: document.getElementById('location').value,
        status: document.getElementById('status').value
    };
    ajaxRequest('/requests/' + requestId, 'PUT', data, function(response) {
        alert('Request updated');
    });
}

// Function to get request details
function getRequestDetails() {
    var requestId = document.getElementById('requestId').value;
    ajaxRequest('/requests/' + requestId, 'GET', {}, function(response) {
        document.getElementById('name').value = response.name;
        document.getElementById('description').value = response.description;
        document.getElementById('associatedVoter').value = response.associatedVoter;
        document.getElementById('dateSubmitted').value = response.dateSubmitted;
        document.getElementById('location').value = response.location;
        document.getElementById('status').value = response.status;
    });
}

// Function to filter requests
function filterRequests() {
    var filter = document.getElementById('filter').value;
    ajaxRequest('/requests?filter=' + filter, 'GET', {}, function(response) {
        // Code to update the request list view with the filtered data
    });
}

// Function to sort requests
function sortRequests() {
    var sort = document.getElementById('sort').value;
    ajaxRequest('/requests?sort=' + sort, 'GET', {}, function(response) {
        // Code to update the request list view with the sorted data
    });
}
```