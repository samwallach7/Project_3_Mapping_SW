// Define custom icon options function
function getCustomIcon(team) {
    // Determine which icon to use based on the team
    var iconUrl = '';
    // AHL Teams
    if (team.lgID === 'AHL' && team.tmID === 'ABB') {iconUrl = 'NHL_Team_Logos/AHL/ABB.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'BAK') {iconUrl = 'NHL_Team_Logos/AHL/BAK.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'BEL') {iconUrl = 'NHL_Team_Logos/AHL/BEL.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'BRI') {iconUrl = 'NHL_Team_Logos/AHL/BRI.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'CGY') {iconUrl = 'NHL_Team_Logos/AHL/CGY.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'CLE') {iconUrl = 'NHL_Team_Logos/AHL/CLE.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'CLT') {iconUrl = 'NHL_Team_Logos/AHL/CLT.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'COL') {iconUrl = 'NHL_Team_Logos/AHL/COL.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'CV') {iconUrl = 'NHL_Team_Logos/AHL/CV.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'GR') {iconUrl = 'NHL_Team_Logos/AHL/GR.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'HER') {iconUrl = 'NHL_Team_Logos/AHL/HER.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'HFD') {iconUrl = 'NHL_Team_Logos/AHL/HFD.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'HSK') {iconUrl = 'NHL_Team_Logos/AHL/HSK.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'IA') {iconUrl = 'NHL_Team_Logos/AHL/IA.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'LAV') {iconUrl = 'NHL_Team_Logos/AHL/LAV.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'LV') {iconUrl = 'NHL_Team_Logos/AHL/LV.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'MB') {iconUrl = 'NHL_Team_Logos/AHL/MB.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'MIL') {iconUrl = 'NHL_Team_Logos/AHL/MIL.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'ONT') {iconUrl = 'NHL_Team_Logos/AHL/ONT.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'PRO') {iconUrl = 'NHL_Team_Logos/AHL/PRO.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'RFD') {iconUrl = 'NHL_Team_Logos/AHL/RFD.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'ROC') {iconUrl = 'NHL_Team_Logos/AHL/ROC.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'SD') {iconUrl = 'NHL_Team_Logos/AHL/SD.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'SJ') {iconUrl = 'NHL_Team_Logos/AHL/SJ.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'SPR') {iconUrl = 'NHL_Team_Logos/AHL/SPR.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'SYR') {iconUrl = 'NHL_Team_Logos/AHL/SYR.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'TEX') {iconUrl = 'NHL_Team_Logos/AHL/TEX.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'TOR') {iconUrl = 'NHL_Team_Logos/AHL/TOR.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'TUC') {iconUrl = 'NHL_Team_Logos/AHL/TUC.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'UTC') {iconUrl = 'NHL_Team_Logos/AHL/UTC.png';}
    else if (team.lgID === 'AHL' && team.tmID === 'WBS') {iconUrl = 'NHL_Team_Logos/AHL/WBS.png';}

    // ECHL Teams
    else if (team.lgID === 'ECHL' && team.tmID === 'TUC') {iconUrl = 'NHL_Team_Logos/AHL/TUC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'UTC') {iconUrl = 'NHL_Team_Logos/AHL/UTC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'WBS') {iconUrl = 'NHL_Team_Logos/AHL/WBS.png';}


    // Return the custom icon options
    return L.icon({
      iconUrl: iconUrl, // Specify the path to the appropriate icon
      iconSize: [30, 30], // Size of the icon
      iconAnchor: [15, 15], // Half of the icon size
      popupAnchor: [0, -20] // Offset the popup to be above the icon
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

// Define list variables
let ahlMarkers = []; // Array to store AHL team markers
let echlMarkers = []; // Array to store ECHL team markers

// Layer 9: AHL affiliates
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.lgID === "AHL") {
        let ahlMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        ahlMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br>NHL Affiliate: ${team.nhlAffiliate}<br>ECHL Affiliate: ${team.echlAffiliate}`);
        ahlMarkers.push(ahlMarker); // Push marker to array
    }
}

// Layer 10: ECHL affiliates
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.lgID === "ECHL") {
        let echlMarker = L.marker([team.lat, team.long], { icon: getCustomIcon(team) });
        echlMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br>NHL Affiliate: ${team.nhlAffiliate}<br>AHL Affiliate: ${team.ahlAffiliate}`);
        echlMarkers.push(echlMarker); // Push marker to array
    }
}

var overlayMaps = {
    "AHL Teams": L.layerGroup(ahlMarkers)
};

// Add base and overlay maps to layer control
L.control.layers(null, overlayMaps, {
collapsed: false,
autoZIndex: true
}).addTo(map);