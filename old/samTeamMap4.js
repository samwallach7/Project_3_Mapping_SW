// Define variables for our tile layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
let baseMaps = {
  Street: street,
  Topography: topo
};

// Create the map object
let map = L.map("map", {
    center: [42.00, -95.71],
    layers: [street],
    zoom: 5
});

// Define overlay maps
var overlayMaps = {}; // Empty object to store overlay maps
var teamMarkers = []; // Array to store team markers
var scMarkers = []; // Array to store team Stanley Cup amounts
var playoffMarkers = []; //Array to store playoff percentage

// Loop through the team data, and create multiple layers for 
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    // 1. Assessing the amount of years each franchise has existed
    let yrsInLeagueColor = "";
    if (jsonData[i].year > 1990) {yrsInLeagueColor = "green";}
    else if (jsonData[i].year > 1966) {yrsInLeagueColor = "yellow";}
    else if (jsonData[i].year > 1900) {yrsInLeagueColor = "red";}
    else {yrsInLeagueColor = "violet";}

    // Add circles to the map
    var marker = L.circleMarker([team.lat, team.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: yrsInLeagueColor,
        radius: 15
    });
    marker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`).openPopup();
    teamMarkers.push(marker); // Push marker to array

    // 2. Assessing how many Stanley Cup Titles each franchise has won
    let scTitlesColor = "";
    if (jsonData[i].StanleyCupWins > 4) {scTitlesColor = "green";}
    else if (jsonData[i].StanleyCupWins > 0) {scTitlesColor = "yellow";}
    else if (jsonData[i].StanleyCupWins == 0) {scTitlesColor = "red";}

    var scMarker = L.circleMarker([team.lat, team.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: scTitlesColor,
        radius: 15
    });
    scMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
    <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
    <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
    <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`).openPopup();
    scMarkers.push(scMarker); // Push marker to array

    // 3. Assessing the percentage of seasons a team has made the playoffs
    let playoffColor = "";
    if (jsonData[i].playoffPercent > 0.67) {playoffColor = "green";}
    else if (jsonData[i].playoffPercent > 0.33) {playoffColor = "yellow";}
    else if (jsonData[i].playoffPercent < 0.33) {playoffColor = "red";}

    var playoffMarker = L.circleMarker([team.lat, team.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: playoffColor,
        radius: 15
    });
    playoffMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
    <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
    <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
    <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`).openPopup();
    playoffMarkers.push(playoffMarker); // Push marker to array
};

// Add team markers as an overlay map
// overlayMaps["Teams"] = L.layerGroup(teamMarkers).addTo(map);
overlayMaps["Stanley Cup Titles"] = L.layerGroup(scMarkers).addTo(map);
// overlayMaps["% of Seasons in Playoffs"] = L.layerGroup(playoffMarkers).addTo(map);

// Add base and overlay maps to layer control
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);

// Add legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Stanley Cup Titles</h4>';
    div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background-color: green;"></span> 5+</div>';
    div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background-color: yellow;"></span> 1+</div>';
    div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background-color: red;"></span> 0</div>';
    return div;
};
legend.addTo(map);