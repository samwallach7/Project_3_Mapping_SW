// Define custom icon options function
function getCustomIcon(team) {
  // Determine which icon to use based on the team
  var iconUrl = '';
  if (team.franchID === 'ANA') {iconUrl = 'NHL_Team_Logos/ANA_light.svg';}
  else if (team.franchID === 'PHO') {iconUrl = 'NHL_Team_Logos/ARI_light.svg';}
  else if (team.franchID === 'BOS') {iconUrl = 'NHL_Team_Logos/BOS_light.svg';}
  else if (team.franchID === 'BUF') {iconUrl = 'NHL_Team_Logos/BUF_light.svg';}
  else if (team.franchID === 'CAR') {iconUrl = 'NHL_Team_Logos/CAR_light.svg';}
  else if (team.franchID === 'CBS') {iconUrl = 'NHL_Team_Logos/CBJ_light.svg';}
  else if (team.franchID === 'CAL') {iconUrl = 'NHL_Team_Logos/CGY_light.svg';}
  else if (team.franchID === 'CHI') {iconUrl = 'NHL_Team_Logos/CHI_light.svg';}
  else if (team.franchID === 'COL') {iconUrl = 'NHL_Team_Logos/COL_light.svg';}
  else if (team.franchID === 'DAL') {iconUrl = 'NHL_Team_Logos/DAL_light.svg';}
  else if (team.franchID === 'DET') {iconUrl = 'NHL_Team_Logos/DET_light.svg';}
  else if (team.franchID === 'EDM') {iconUrl = 'NHL_Team_Logos/EDM_light.svg';}
  else if (team.franchID === 'FLO') {iconUrl = 'NHL_Team_Logos/FLA_light.svg';}
  else if (team.franchID === 'LAK') {iconUrl = 'NHL_Team_Logos/LAK_light.svg';}
  else if (team.franchID === 'MIN') {iconUrl = 'NHL_Team_Logos/MIN_light.svg';}
  else if (team.franchID === 'MTL') {iconUrl = 'NHL_Team_Logos/MTL_light.svg';}
  else if (team.franchID === 'NJD') {iconUrl = 'NHL_Team_Logos/NJD_light.svg';}
  else if (team.franchID === 'NAS') {iconUrl = 'NHL_Team_Logos/NSH_light.svg';}
  else if (team.franchID === 'NYI') {iconUrl = 'NHL_Team_Logos/NYI_light.svg';}
  else if (team.franchID === 'NYR') {iconUrl = 'NHL_Team_Logos/NYR_light.svg';}
  else if (team.franchID === 'STE') {iconUrl = 'NHL_Team_Logos/OTT_light.svg';}
  else if (team.franchID === 'PHI') {iconUrl = 'NHL_Team_Logos/PHI_light.svg';}
  else if (team.franchID === 'PIT') {iconUrl = 'NHL_Team_Logos/PIT_light.svg';}
  else if (team.franchID === 'SEA') {iconUrl = 'NHL_Team_Logos/SEA_light.svg';}
  else if (team.franchID === 'SJS') {iconUrl = 'NHL_Team_Logos/SJS_light.svg';}
  else if (team.franchID === 'STL') {iconUrl = 'NHL_Team_Logos/STL_light.svg';}
  else if (team.franchID === 'TBL') {iconUrl = 'NHL_Team_Logos/TBL_light.svg';}
  else if (team.franchID === 'TOR') {iconUrl = 'NHL_Team_Logos/TOR_light.svg';}
  else if (team.franchID === 'VAN') {iconUrl = 'NHL_Team_Logos/VAN_light.svg';}
  else if (team.franchID === 'VGK') {iconUrl = 'NHL_Team_Logos/VGK_light.svg';}
  else if (team.franchID === 'WPG') {iconUrl = 'NHL_Team_Logos/WPG_light.svg';}
  else if (team.franchID === 'WAS') {iconUrl = 'NHL_Team_Logos/WSH_light.svg';}

  // Return the custom icon options
  return L.icon({
    iconUrl: iconUrl, // Specify the path to the appropriate icon
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 38], // Half of the icon size
    popupAnchor: [0, -38] // Offset the popup to be above the icon
  });
}
  
// Add the base tile layer
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

// Define list variables
let overlayMaps = {}; // Empty object to store overlay maps
let teamMarkers = []; // Array to store team markers
let scMarkers = []; // Array to store Stanley Cup Titles

// Loop through data
// jsonData.forEach(function(team) {
for (let i = 0; i < jsonData.length; i++) {
  let team = jsonData[i]
  // Layer 1: All current NHL teams
  // Create marker with custom icon for each team in the dataset
  let marker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) })
    .bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
      <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
      <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
      <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
  teamMarkers.push(marker); // Push marker to array

  // Layer 2: Stanley Cup Titles
  let scMarker = "";
  if (jsonData[i].StanleyCupWins > 4) {scMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) })
    .bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
      <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
      <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
      <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);}
  scMarkers.push(scMarker); // Push marker to array

};

// Add markers to overlay maps
overlayMaps["Teams"] = L.layerGroup(teamMarkers).addTo(map);
// overlayMaps["Stanley Cup Titles"] = L.layerGroup(scMarkers).addTo(map);

// Add base and overlay maps to layer control
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);