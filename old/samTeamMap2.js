// Create the map object
let myMap = L.map("map", {
    center: [42.00, -95.71],
    zoom: 5
});

// // Add a tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

// Define base layers
var baseMaps = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap),
    "Topographic View": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
    })
};

// Loop through the teams array, and create a marker for each team object
for (let i = 0; i < jsonData.length; i++) {
    // Conditionals for founding year
    let color = "";
    if (jsonData[i].year > 1990) {
        color = "green";
    }
    else if (jsonData[i].year > 1966) {
        color = "yellow";
    }
    else if (jsonData[i].year > 1900) {
        color = "red";
    }
    else {
        color = "violet";
    }

    // Add circles to the map
    L.circleMarker([jsonData[i].lat, jsonData[i].long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        radius: 20
    }).bindPopup(`<h1>${jsonData[i].teamName}</h1> <hr> <h3> Franchise ID: ${jsonData[i].franchID}</h3> <hr> <h3> Year Founded: ${jsonData[i].year}</h3>`).addTo(myMap);
}
