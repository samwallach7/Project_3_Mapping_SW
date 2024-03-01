// Define custom icon options function
function getCustomIcon(team) {
    // Determine which icon to use based on the team
    var iconUrl = '';
    if (team.franchID === 'ANA') {iconUrl = 'NHL_Team_Logos/ANA_light.svg';}
    else if (team.franchID === 'ARI') {iconUrl = 'NHL_Team_Logos/ARI_light.svg';}
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
    else if (team.franchID === 'OTT') {iconUrl = 'NHL_Team_Logos/OTT_light.svg';}
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

// Create the map object
let map = L.map("map", {
    center: [42.00, -95.71],
    zoom: 5
});

// Add the base tile layer
let baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });

// Only one base layer can be shown at a time.
// let baseMaps = {
// Street: street,
// Topography: topo
// };

// Define list variables
let teamMarkers = []; // Array to store team markers
let ecMarkers = [];
let wcMarkers = [];
let scMarkers = []; // Array to store Stanley Cup Titles
let playoffMarkers = []; // Array to store playoff percentage
let seasonsMarkers = []; // Array to store playoff percentage

// Layer 1: All current NHL teams
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    // Create marker with custom icon for each team in the dataset
    let marker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
    marker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
    <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
    <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
    <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
    teamMarkers.push(marker); // Push marker to array
}

// Layer 2: Conference - Eastern
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.conference === "Eastern") {
        let ecMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        ecMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        ecMarkers.push(ecMarker); // Push marker to array
    }
}

// Layer 3: Conference - Western
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.conference === "Western") {
        let wcMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        wcMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        wcMarkers.push(wcMarker); // Push marker to array
    }
}

// Layer 4: Stanley Cup Titles
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.StanleyCupWins > 4) {
        let scMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        scMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        scMarkers.push(scMarker); // Push marker to array
    }
}

// Layer 5: % of Playoff Seasons
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.playoffPercent > .5) {
        let playoffMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        playoffMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        playoffMarkers.push(playoffMarker); // Push marker to array
    }
}

// Layer 6: 50+ seasons
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.totalSeasons > 49) {
        let seasonsMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        seasonsMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        seasonsMarkers.push(seasonsMarker); // Push marker to array
    }
}

var overlayMaps = {
    "All Active NHL Teams": L.layerGroup(teamMarkers),
    "Eastern Conference": L.layerGroup(ecMarkers),
    "Western Conference": L.layerGroup(wcMarkers),
    "Over 4 Stanley Cup Titles": L.layerGroup(scMarkers),
    "Over 50% of Seasons in Playoffs": L.layerGroup(playoffMarkers),
    "50+ Seasons in NHL": L.layerGroup(seasonsMarkers)
};

// Add base and overlay maps to layer control
L.control.layers(null, overlayMaps, {
collapsed: false,
autoZIndex: true
}).addTo(map);