// Initialize the map
var map = L.map('map').setView([42.00, -95.71], 5);

// Add the base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Define custom icon options
var customIcon = L.icon({
    iconUrl: 'NHL_Team_Logos/MTL_light.svg', // Specify the path to your custom image
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 50], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
});

// Add marker with custom icon to the map
L.marker([45.49611, -73.56944], { icon: customIcon }).addTo(map)
    .bindPopup("This is a custom icon marker.");