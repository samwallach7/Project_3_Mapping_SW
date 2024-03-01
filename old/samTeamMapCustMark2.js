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
  
// Initialize the map
var map = L.map('map').setView([42.00, -95.71], 5);
  
  // Add the base tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
  
  // Assuming you have 'jsonData' containing NHL team information
  jsonData.forEach(function(team) {
    // Create marker with custom icon for each team in the dataset
    L.marker([team.lat, team.long], { icon: getCustomIcon(team) }).addTo(map)
        .bindPopup(`<h2>${team.teamName}</h2> <hr> Year Founded: ${team.year}
            <br>Conference: ${team.conference}<br>Total Seasons: ${team.totalSeasons}
            <br>Playoff Seasons: ${team.playoffSeasons}<br>Percent of Seasons in Playoffs: ${team.playoffPercent}
            <br>Stanley Cup Appearances: ${team.SCAppearances}<br>Stanley Cup Titles: ${team.StanleyCupWins}`);
  });