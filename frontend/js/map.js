```javascript
// Initialize map
let map;

// Function to initialize map
function initMap() {
    map = new google.maps.Map(document.getElementById('mapView'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

// Function to add marker for a voter
function addMarker(voter) {
    let marker = new google.maps.Marker({
        position: {lat: voter.location.lat, lng: voter.location.lng},
        map: map,
        title: voter.fullName
    });

    let infoWindow = new google.maps.InfoWindow({
        content: `<h2>${voter.fullName}</h2><p>${voter.address}</p>`
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// Function to show voters on map
function showMapView(voters) {
    voters.forEach(voter => {
        addMarker(voter);
    });
}

// Function to filter map based on location and radius
function filterMap(location, radius) {
    let filteredVoters = voters.filter(voter => {
        let distance = google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(location),
            new google.maps.LatLng(voter.location)
        );
        return distance <= radius;
    });

    // Clear all markers
    for (let i = 0; i < map.markers.length; i++) {
        map.markers[i].setMap(null);
    }

    // Show filtered voters
    showMapView(filteredVoters);
}

// Event listener for location input
document.getElementById('inputLocation').addEventListener('change', function() {
    let location = this.value;
    let radius = document.getElementById('inputRadius').value;
    filterMap(location, radius);
});

// Event listener for radius input
document.getElementById('inputRadius').addEventListener('change', function() {
    let radius = this.value;
    let location = document.getElementById('inputLocation').value;
    filterMap(location, radius);
});
```