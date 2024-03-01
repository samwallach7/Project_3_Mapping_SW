// Define custom icon options function
function getCustomIcon(team) {
    // Determine which icon to use based on the team
    var iconUrl = '';
    // Active teams
    if (team.tmID === 'ANA') {iconUrl = 'NHL_Team_Logos/ANA_light.svg';}
    else if (team.tmID === 'ARI') {iconUrl = 'NHL_Team_Logos/ARI_light.svg';}
    else if (team.tmID === 'BOS') {iconUrl = 'NHL_Team_Logos/BOS_light.svg';}
    else if (team.tmID === 'BUF') {iconUrl = 'NHL_Team_Logos/BUF_light.svg';}
    else if (team.tmID === 'CAR') {iconUrl = 'NHL_Team_Logos/CAR_light.svg';}
    else if (team.tmID === 'CBS') {iconUrl = 'NHL_Team_Logos/CBJ_light.svg';}
    else if (team.tmID === 'CAL') {iconUrl = 'NHL_Team_Logos/CGY_light.svg';}
    else if (team.tmID === 'CHI') {iconUrl = 'NHL_Team_Logos/CHI_light.svg';}
    else if (team.tmID === 'COL') {iconUrl = 'NHL_Team_Logos/COL_light.svg';}
    else if (team.tmID === 'DAL') {iconUrl = 'NHL_Team_Logos/DAL_light.svg';}
    else if (team.tmID === 'DET') {iconUrl = 'NHL_Team_Logos/DET_light.svg';}
    else if (team.tmID === 'EDM') {iconUrl = 'NHL_Team_Logos/EDM_light.svg';}
    else if (team.tmID === 'FLO') {iconUrl = 'NHL_Team_Logos/FLA_light.svg';}
    else if (team.tmID === 'LAK') {iconUrl = 'NHL_Team_Logos/LAK_light.svg';}
    else if (team.tmID === 'MIN') {iconUrl = 'NHL_Team_Logos/MIN_light.svg';}
    else if (team.tmID === 'MTL') {iconUrl = 'NHL_Team_Logos/MTL_light.svg';}
    else if (team.tmID === 'NJD') {iconUrl = 'NHL_Team_Logos/NJD_light.svg';}
    else if (team.tmID === 'NAS') {iconUrl = 'NHL_Team_Logos/NSH_light.svg';}
    else if (team.tmID === 'NYI') {iconUrl = 'NHL_Team_Logos/NYI_light.svg';}
    else if (team.tmID === 'NYR') {iconUrl = 'NHL_Team_Logos/NYR_light.svg';}
    else if (team.tmID === 'OTT') {iconUrl = 'NHL_Team_Logos/OTT_light.svg';}
    else if (team.tmID === 'PHI') {iconUrl = 'NHL_Team_Logos/PHI_light.svg';}
    else if (team.tmID === 'PIT') {iconUrl = 'NHL_Team_Logos/PIT_light.svg';}
    else if (team.tmID === 'SEA') {iconUrl = 'NHL_Team_Logos/SEA_light.svg';}
    else if (team.tmID === 'SJS') {iconUrl = 'NHL_Team_Logos/SJS_light.svg';}
    else if (team.tmID === 'STL') {iconUrl = 'NHL_Team_Logos/STL_light.svg';}
    else if (team.tmID === 'TBL') {iconUrl = 'NHL_Team_Logos/TBL_light.svg';}
    else if (team.tmID === 'TOR') {iconUrl = 'NHL_Team_Logos/TOR_light.svg';}
    else if (team.tmID === 'VAN') {iconUrl = 'NHL_Team_Logos/VAN_light.svg';}
    else if (team.tmID === 'VGK') {iconUrl = 'NHL_Team_Logos/VGK_light.svg';}
    else if (team.tmID === 'WPG') {iconUrl = 'NHL_Team_Logos/WPG_light.svg';}
    else if (team.tmID === 'WAS') {iconUrl = 'NHL_Team_Logos/WSH_light.svg';}
    // Defunct teams 
    else if (team.tmID === 'MTW') {iconUrl = 'NHL_Team_Logos/Defunct/MTW_light.svg';}
    else if (team.tmID === 'STE') {iconUrl = 'NHL_Team_Logos/Defunct/STE_light.svg';}
    else if (team.tmID === 'BKN') {iconUrl = 'NHL_Team_Logos/Defunct/BKN_light.svg';}
    else if (team.tmID === 'MTM') {iconUrl = 'NHL_Team_Logos/Defunct/MTM_light.svg';}
    else if (team.tmID === 'PHQ') {iconUrl = 'NHL_Team_Logos/Defunct/PHQ_light.svg';}
    else if (team.tmID === 'CLE') {iconUrl = 'NHL_Team_Logos/Defunct/CLE_light.svg';}
    // Moved or changed teams
    else if (team.tmID === 'PHO') {iconUrl = 'NHL_Team_Logos/Moved/PHO_light.svg';}
    else if (team.tmID === 'WIN') {iconUrl = 'NHL_Team_Logos/Moved/WIN_light.svg';}
    else if (team.tmID === 'ATF') {iconUrl = 'NHL_Team_Logos/Moved/ATF_light.svg';}
    else if (team.tmID === 'HAR') {iconUrl = 'NHL_Team_Logos/Moved/HAR_light.svg';}
    else if (team.tmID === 'QUE') {iconUrl = 'NHL_Team_Logos/Moved/QUE_light.svg';}
    else if (team.tmID === 'MNS') {iconUrl = 'NHL_Team_Logos/Moved/MNS_light.svg';}
    else if (team.tmID === 'DTF') {iconUrl = 'NHL_Team_Logos/Moved/DTF_light.svg';}
    else if (team.tmID === 'DTC') {iconUrl = 'NHL_Team_Logos/Moved/DTC_light.svg';}
    else if (team.tmID === 'COR') {iconUrl = 'NHL_Team_Logos/Moved/COR_light.svg';}
    else if (team.tmID === 'KCS') {iconUrl = 'NHL_Team_Logos/Moved/KCS_light.svg';}
    else if (team.tmID === 'TRS') {iconUrl = 'NHL_Team_Logos/Moved/TRS_light.svg';}
    else if (team.tmID === 'TOA') {iconUrl = 'NHL_Team_Logos/Moved/TOA_light.svg';}
    else if (team.tmID === 'ATL') {iconUrl = 'NHL_Team_Logos/Moved/ATL_light.svg';}
    else if (team.tmID === 'OTS') {iconUrl = 'NHL_Team_Logos/Moved/OTS_light.svg';}
    else if (team.tmID === 'NYA') {iconUrl = 'NHL_Team_Logos/Moved/NYA_light.svg';}
    else if (team.tmID === 'HAM') {iconUrl = 'NHL_Team_Logos/Moved/HAM_light.svg';}
    else if (team.tmID === 'QUB') {iconUrl = 'NHL_Team_Logos/Moved/QUB_light.svg';}
    else if (team.tmID === 'CLF') {iconUrl = 'NHL_Team_Logos/Moved/CLF_light.svg';}
    else if (team.tmID === 'OAK') {iconUrl = 'NHL_Team_Logos/Moved/OAK_light.svg';}
    else if (team.tmID === 'PIP') {iconUrl = 'NHL_Team_Logos/Moved/PIP_light.svg';}

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
    zoom: 4
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
let defunctMarkers = []; // Array to store defunct franchises
let teamMoveMarkers = []; // Array to store teams that have moved

// Layer 1: All current NHL teams
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.active === "yes") {
        let activeMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        activeMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        teamMarkers.push(activeMarker); // Push marker to array
    }
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

// Layer 5: 50% of Playoff Seasons, Active Teams
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.playoffPercent > .5 && team.active === "yes") {
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
    if (team.totalSeasons > 49 && team.active === "yes") {
        let seasonsMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        seasonsMarker.bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
        <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
        <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
        <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
        seasonsMarkers.push(seasonsMarker); // Push marker to array
    }
}

// Layer 7: Defunct franchises
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.active === "no") {
        let defunctMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        defunctMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br>Total Seasons: ${team.totalSeasons}<br>Playoff Seasons: ${team.playoffSeasons}
        <br>Percent of Seasons in Playoffs: ${team.playoffPercent}<br>Stanley Cup Appearances: ${team.SCAppearances}
        <br>Stanley Cup Titles: ${team.StanleyCupWins}<br>Last Season: ${team.lastSeason}`);
        defunctMarkers.push(defunctMarker); // Push marker to array
    }
}

// Layer 8: Franchise movement
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.active === "moved") {
        let teamMoveMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        teamMoveMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br> Franchise: ${team.franchID}<br>Total Seasons: ${team.totalSeasons}<br>Last Season: ${team.lastSeason}
        <br>Team Changed To: ${team.teamChange}`);
        teamMoveMarkers.push(teamMoveMarker); // Push marker to array
    }
}

var overlayMaps = {
    "All Active NHL Teams": L.layerGroup(teamMarkers),
    "Eastern Conference": L.layerGroup(ecMarkers),
    "Western Conference": L.layerGroup(wcMarkers),
    "Over 4 Stanley Cup Titles": L.layerGroup(scMarkers),
    "Over 50% of Seasons in Playoffs": L.layerGroup(playoffMarkers),
    "50+ Seasons in NHL": L.layerGroup(seasonsMarkers),
    "Defunct Franchises": L.layerGroup(defunctMarkers),
    "Franchise Movement": L.layerGroup(teamMoveMarkers)
};

// Add base and overlay maps to layer control
L.control.layers(null, overlayMaps, {
collapsed: false,
autoZIndex: true
}).addTo(map);