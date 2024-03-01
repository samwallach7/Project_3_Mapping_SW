// Define custom icon options function
function getCustomIcon(team) {
    // Determine which icon to use based on the team
    var iconUrl = '';
    // Active NHL teams
    if (team.lgID === 'NHL' && team.tmID === 'ANA') {iconUrl = 'NHL_Team_Logos/ANA_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'ARI') {iconUrl = 'NHL_Team_Logos/ARI_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'BOS') {iconUrl = 'NHL_Team_Logos/BOS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'BUF') {iconUrl = 'NHL_Team_Logos/BUF_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CAR') {iconUrl = 'NHL_Team_Logos/CAR_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CBS') {iconUrl = 'NHL_Team_Logos/CBJ_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CAL') {iconUrl = 'NHL_Team_Logos/CGY_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CHI') {iconUrl = 'NHL_Team_Logos/CHI_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'COL') {iconUrl = 'NHL_Team_Logos/COL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'DAL') {iconUrl = 'NHL_Team_Logos/DAL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'DET') {iconUrl = 'NHL_Team_Logos/DET_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'EDM') {iconUrl = 'NHL_Team_Logos/EDM_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'FLO') {iconUrl = 'NHL_Team_Logos/FLA_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'LAK') {iconUrl = 'NHL_Team_Logos/LAK_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'MIN') {iconUrl = 'NHL_Team_Logos/MIN_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'MTL') {iconUrl = 'NHL_Team_Logos/MTL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'NJD') {iconUrl = 'NHL_Team_Logos/NJD_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'NAS') {iconUrl = 'NHL_Team_Logos/NSH_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'NYI') {iconUrl = 'NHL_Team_Logos/NYI_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'NYR') {iconUrl = 'NHL_Team_Logos/NYR_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'OTT') {iconUrl = 'NHL_Team_Logos/OTT_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'PHI') {iconUrl = 'NHL_Team_Logos/PHI_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'PIT') {iconUrl = 'NHL_Team_Logos/PIT_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'SEA') {iconUrl = 'NHL_Team_Logos/SEA_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'SJS') {iconUrl = 'NHL_Team_Logos/SJS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'STL') {iconUrl = 'NHL_Team_Logos/STL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'TBL') {iconUrl = 'NHL_Team_Logos/TBL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'TOR') {iconUrl = 'NHL_Team_Logos/TOR_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'VAN') {iconUrl = 'NHL_Team_Logos/VAN_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'VGK') {iconUrl = 'NHL_Team_Logos/VGK_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'WPG') {iconUrl = 'NHL_Team_Logos/WPG_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'WAS') {iconUrl = 'NHL_Team_Logos/WSH_light.svg';}
    // Defunct NHL teams 
    else if (team.lgID === 'NHL' && team.tmID === 'MTW') {iconUrl = 'NHL_Team_Logos/Defunct/MTW_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'STE') {iconUrl = 'NHL_Team_Logos/Defunct/STE_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'BKN') {iconUrl = 'NHL_Team_Logos/Defunct/BKN_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'MTM') {iconUrl = 'NHL_Team_Logos/Defunct/MTM_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'PHQ') {iconUrl = 'NHL_Team_Logos/Defunct/PHQ_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CLE') {iconUrl = 'NHL_Team_Logos/Defunct/CLE_light.svg';}
    // Moved or changed NHL teams
    else if (team.lgID === 'NHL' && team.tmID === 'PHO') {iconUrl = 'NHL_Team_Logos/Moved/PHO_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'WIN') {iconUrl = 'NHL_Team_Logos/Moved/WIN_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'ATF') {iconUrl = 'NHL_Team_Logos/Moved/ATF_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'HAR') {iconUrl = 'NHL_Team_Logos/Moved/HAR_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'QUE') {iconUrl = 'NHL_Team_Logos/Moved/QUE_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'MNS') {iconUrl = 'NHL_Team_Logos/Moved/MNS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'DTF') {iconUrl = 'NHL_Team_Logos/Moved/DTF_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'DTC') {iconUrl = 'NHL_Team_Logos/Moved/DTC_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'COR') {iconUrl = 'NHL_Team_Logos/Moved/COR_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'KCS') {iconUrl = 'NHL_Team_Logos/Moved/KCS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'TRS') {iconUrl = 'NHL_Team_Logos/Moved/TRS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'TOA') {iconUrl = 'NHL_Team_Logos/Moved/TOA_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'ATL') {iconUrl = 'NHL_Team_Logos/Moved/ATL_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'OTS') {iconUrl = 'NHL_Team_Logos/Moved/OTS_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'NYA') {iconUrl = 'NHL_Team_Logos/Moved/NYA_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'HAM') {iconUrl = 'NHL_Team_Logos/Moved/HAM_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'QUB') {iconUrl = 'NHL_Team_Logos/Moved/QUB_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'CLF') {iconUrl = 'NHL_Team_Logos/Moved/CLF_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'OAK') {iconUrl = 'NHL_Team_Logos/Moved/OAK_light.svg';}
    else if (team.lgID === 'NHL' && team.tmID === 'PIP') {iconUrl = 'NHL_Team_Logos/Moved/PIP_light.svg';}

    // Return the custom icon options
    return L.icon({
      iconUrl: iconUrl, // Specify the path to the appropriate icon
      iconSize: [50, 50], // Size of the icon
      iconAnchor: [25, 38], // Half of the icon size
      popupAnchor: [0, -38] // Offset the popup to be above the icon
    });
}

// Define custom icon options function
function getMLCustomIcon(team) {
    // Determine which icon to use based on the team
    var iconUrl = '';
    // AHL teams
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
    // ECHL teams
    else if (team.lgID === 'ECHL' && team.tmID === 'ADK') {iconUrl = 'NHL_Team_Logos/ECHL/ADK.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'ALN') {iconUrl = 'NHL_Team_Logos/ECHL/ALN.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'ATL') {iconUrl = 'NHL_Team_Logos/ECHL/ATL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'CIN') {iconUrl = 'NHL_Team_Logos/ECHL/CIN.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'FLA') {iconUrl = 'NHL_Team_Logos/ECHL/FLA.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'FW') {iconUrl = 'NHL_Team_Logos/ECHL/FW.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'GVL') {iconUrl = 'NHL_Team_Logos/ECHL/GVL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'IA') {iconUrl = 'NHL_Team_Logos/ECHL/IA.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'IDH') {iconUrl = 'NHL_Team_Logos/ECHL/IDH.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'IND') {iconUrl = 'NHL_Team_Logos/ECHL/IND.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'JAX') {iconUrl = 'NHL_Team_Logos/ECHL/JAX.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'KAL') {iconUrl = 'NHL_Team_Logos/ECHL/KAL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'KC') {iconUrl = 'NHL_Team_Logos/ECHL/KC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'MNE') {iconUrl = 'NHL_Team_Logos/ECHL/MNE.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'NFL') {iconUrl = 'NHL_Team_Logos/ECHL/NFL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'NOR') {iconUrl = 'NHL_Team_Logos/ECHL/NOR.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'ORL') {iconUrl = 'NHL_Team_Logos/ECHL/ORL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'RC') {iconUrl = 'NHL_Team_Logos/ECHL/RC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'REA') {iconUrl = 'NHL_Team_Logos/ECHL/REA.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'SAV') {iconUrl = 'NHL_Team_Logos/ECHL/SAV.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'SC') {iconUrl = 'NHL_Team_Logos/ECHL/SC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'TOL') {iconUrl = 'NHL_Team_Logos/ECHL/TOL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'TR') {iconUrl = 'NHL_Team_Logos/ECHL/TR.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'TUL') {iconUrl = 'NHL_Team_Logos/ECHL/TUL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'UTA') {iconUrl = 'NHL_Team_Logos/ECHL/UTA.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'WHL') {iconUrl = 'NHL_Team_Logos/ECHL/WHL.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'WIC') {iconUrl = 'NHL_Team_Logos/ECHL/WIC.png';}
    else if (team.lgID === 'ECHL' && team.tmID === 'WOR') {iconUrl = 'NHL_Team_Logos/ECHL/WOR.png';}

    // Return the custom icon options
    return L.icon({
      iconUrl: iconUrl, // Specify the path to the appropriate icon
      iconSize: [35, 35], // Size of the icon
      iconAnchor: [17, 17], // Half of the icon size
      popupAnchor: [0, -20] // Offset the popup to be above the icon
    });
}

// Create the map object
let map = L.map("map", {
    center: [41.00, -90.00],
    zoom: 4
});

// Add the base tile layer
let street = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Set basemaps
let baseMaps = {
Street: street,
Topo: topo

};

// Define list variables
let teamMarkers = []; // Array to store team markers
let ecMarkers = [];
let wcMarkers = [];
let scMarkers = []; // Array to store Stanley Cup Titles
let playoffMarkers = []; // Array to store playoff percentage
let seasonsMarkers = []; // Array to store playoff percentage
let defunctMarkers = []; // Array to store defunct franchises
let teamMoveMarkers = []; // Array to store teams that have moved
let ahlMarkers = []; // Array to store AHL team markers
let echlMarkers = []; // Array to store ECHL team markers

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
        <br>Franchise: ${team.franchID}<br>Total Seasons: ${team.totalSeasons}<br>Last Season: ${team.lastSeason}
        <br>Team Changed To: ${team.teamChange}`);
        teamMoveMarkers.push(teamMoveMarker); // Push marker to array

        // Add animation to the marker
        teamMoveMarker.on('click', function() {
            teamMoveMarker.setOpacity(0.5); // Dim the clicked marker
            // Code for highlighting the clicked marker or any other animation
            teamMoveMarker.setIcon(highlightIcon); // Assuming highlightIcon is your highlighted icon
        });
        let line = [[team.lat, team.long], [team.teamChangeLat, team.teamChangeLong]];
        let teamMovePolyline = L.polyline(line, {color: "red"});
        teamMovePolyline.bindPopup(`<h4>${team.lastSeason}: ${team.teamName} became the ${team.teamChange}</h4>`);
        teamMovePolyline.on('click', function() {
            teamMovePolyline.setStyle({color: 'green' }).snakeIn();
        });
        teamMoveMarkers.push(teamMovePolyline); // Push line to array
    }
}

// Reset markers and polylines to normal state when clicking anywhere on the map
map.on('click', function() {
    teamMoveMarkers.forEach(function(item) {
        if (item instanceof L.Marker) {
            item.setOpacity(1); // Reset marker opacity
            // Reset any other marker animation here
            item.setIcon(normalIcon); // Assuming normalIcon is your normal icon
        } else if (item instanceof L.Polyline) {
            item.setStyle({color: 'red'}); // Reset polyline color
            // Reset any other polyline animation here
        }
    });
});

// Layer 9: AHL affiliates
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.lgID === "AHL") {
        let ahlMarker = L.marker([team.lat, team.long], { icon: getMLCustomIcon(team) });
        ahlMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br>NHL Affiliate: ${team.nhlAffiliate}<br>ECHL Affiliate: ${team.echlAffiliate}`);
        ahlMarkers.push(ahlMarker); // Push marker to array
    }
}

// Layer 10: ECHL affiliates
for (let i = 0; i < jsonData.length; i++) {
    let team = jsonData[i]
    if (team.lgID === "ECHL") {
        let echlMarker = L.marker([team.lat, team.long], { icon: getMLCustomIcon(team) });
        echlMarker.bindPopup(`<h2>${team.teamName}</h2><hr> Year Founded: ${team.year}
        <br>NHL Affiliate: ${team.nhlAffiliate}<br>AHL Affiliate: ${team.ahlAffiliate}`);
        echlMarkers.push(echlMarker); // Push marker to array
    }
}

var overlayMaps = {
    "Active NHL Teams": L.layerGroup(teamMarkers),
    "Eastern Conference": L.layerGroup(ecMarkers),
    "Western Conference": L.layerGroup(wcMarkers),
    "5+ Stanley Cup Titles": L.layerGroup(scMarkers),
    "50% of Seasons in Playoffs (NHL)": L.layerGroup(playoffMarkers),
    "50+ Seasons (NHL)": L.layerGroup(seasonsMarkers),
    "Defunct Franchises (NHL)": L.layerGroup(defunctMarkers),
    "Franchise Movement (NHL)": L.layerGroup(teamMoveMarkers),
    "AHL Teams (AAA Affiliate)": L.layerGroup(ahlMarkers),
    "ECHL Teams (AA Affiliate)": L.layerGroup(echlMarkers)
};

// Add base and overlay maps to layer control
L.control.layers(baseMaps, overlayMaps, {
collapsed: false,
autoZIndex: true
}).addTo(map);