// document.addEventListener('DOMContentLoaded', function() {
//     fetch(`json/ocean-waste.json`)
//         .then((d) => 
//             d.json().then(function(dataOceanWaste) {
//                 // console.log(dataOceanWaste);
                
//                 const oceanPlasticLeakageValues = dataOceanWaste.map(item => item.OceanPlasticLeakage);
//                 console.log(oceanPlasticLeakageValues)
            
//             })
//         );
//     fetch(`json/lakes-rivers-waste.json`)
//         .then((d) => 
//             d.json().then(function(dataLakesRiversWaste) {
//                 // console.log(dataOceanWaste);
//                 const riversLakesPlasticLeakageValues = dataLakesRiversWaste.map(item => item.lrWaste);
//                 console.log(riversLakesPlasticLeakageValues)

//                 console.log("Ocean Plastic Leakage Values:", oceanPlasticLeakageValues);

//             })
//         );
//     fetch(`json/world-plastic-production.json`)
//         .then((d) => 
//             d.json().then(function(dataPlasticProduction) {
//                 // console.log(dataOceanWaste);
//                 const worldPlasticProductionValues = dataPlasticProduction.map(item => item.AnnualPlasticProduction);
//                 console.log(worldPlasticProductionValues)
  
//             })
//         );
    
// });


document.addEventListener('DOMContentLoaded', function () {
    let oceanPlasticLeakageValues = [];
    let riversLakesPlasticLeakageValues = [];
    let worldPlasticProductionValues = [];

    // Charger les données de déchets plastiques dans les océans
    fetch(`json/ocean-waste.json`)
        .then((d) => d.json())
        .then((dataOceanWaste) => {
            oceanPlasticLeakageValues = dataOceanWaste.map(item => item.OceanPlasticLeakage);
            console.log("Ocean Plastic Leakage Values:", oceanPlasticLeakageValues);
        });

    // Charger les données de déchets plastiques dans les lacs et rivières
    fetch(`json/lakes-rivers-waste.json`)
        .then((d) => d.json())
        .then((dataLakesRiversWaste) => {
            riversLakesPlasticLeakageValues = dataLakesRiversWaste.map(item => item.lrWaste);
            console.log("Lakes and Rivers Plastic Leakage Values:", riversLakesPlasticLeakageValues);
        });

    // Charger les données de production mondiale de plastique
    fetch(`json/world-plastic-production.json`)
        .then((d) => d.json())
        .then((dataPlasticProduction) => {
            worldPlasticProductionValues = dataPlasticProduction.map(item => item.AnnualPlasticProduction);
            console.log("World Plastic Production Values:", worldPlasticProductionValues);

            // Calculer les ratios lorsque toutes les données sont disponibles
            if (oceanPlasticLeakageValues.length > 0 && riversLakesPlasticLeakageValues.length > 0) {
                const oceanRatios = oceanPlasticLeakageValues.map((value, index) => {
                    const production = worldPlasticProductionValues[index] || 1; // Éviter la division par zéro
                    return value / production;
                });

                const lakesRiversRatios = riversLakesPlasticLeakageValues.map((value, index) => {
                    const production = worldPlasticProductionValues[index] || 1; // Éviter la division par zéro
                    return value / production;
                });

                console.log("Ratios for Ocean Plastic Leakage:", oceanRatios);
                console.log("Ratios for Lakes and Rivers Plastic Leakage:", lakesRiversRatios);
                
 // Premier graphique ratio Océan
 const ratioOamericas = oceanRatios.slice(0, 19);
 console.log("Ocean Americas:",ratioOamericas);
 
 const ratioOasia = oceanRatios.slice(20, 39);
 console.log("Ocean Asia:",ratioOasia);
 
 const ratioOchina = oceanRatios.slice(40, 59);
 console.log("Ocean China:",ratioOchina);
 
 const ratioOeurope = oceanRatios.slice(60, 79);
 console.log("Ocean Europe:",ratioOeurope);
 
 const ratioOindia = oceanRatios.slice(80, 99);
 console.log("Ocean India:",ratioOindia);
 
 const ratioOENafrica = oceanRatios.slice(100, 119);
 console.log("Ocean Middle East & North Africa:",ratioOENafrica);
 
 const ratioOoceania = oceanRatios.slice(120, 139);
 console.log("Ocean Oceania:",ratioOoceania);
 
 const ratioOSSafrica = oceanRatios.slice(140, 159);
 console.log("Ocean Sub-Saharan Africa:",ratioOSSafrica);
 
 const ratioOUS = oceanRatios.slice(160, 179);
 console.log("Ocean United-States:",ratioOUS);
 
 const ratioOW = oceanRatios.slice(180, 199);
 console.log("Ocean World/Total:",ratioOW);
 
         // Deuxième graphique ratio lac rivière
 const ratioLRamericas = lakesRiversRatios.slice(0, 19);
 console.log("Lac/Riv Americas:",ratioLRamericas);
         
 const ratioLRasia = lakesRiversRatios.slice(20, 39);
 console.log("Lac/Riv Asia:",ratioLRasia);
         
 const ratioLRchina = lakesRiversRatios.slice(40, 59);
 console.log("Lac/Riv China:",ratioLRchina);
         
 const ratioLReurope = lakesRiversRatios.slice(60, 79);
 console.log("Lac/Riv Europe:",ratioLReurope);
         
 const ratioLRindia = lakesRiversRatios.slice(80, 99);
 console.log("Lac/Riv India:",ratioLRindia);
         
 const ratioLRENafrica = lakesRiversRatios.slice(100, 119);
 console.log("Lac/Riv Middle East & North Africa:",ratioLRENafrica);
         
 const ratioLRoceania = lakesRiversRatios.slice(120, 139);
 console.table("Lac/Riv Oceania:",ratioLRoceania);
         
 const ratioLRSSafrica = lakesRiversRatios.slice(140, 159);
 console.table("Lac/Riv Sub-Saharan Africa:",ratioLRSSafrica);
         
 const ratioLRUS = lakesRiversRatios.slice(160, 179);
 console.table("Lac/Riv United-States:",ratioLRUS);
         
 const ratioLRW = lakesRiversRatios.slice(180, 199);
 console.table("Lac/Riv World/Total:",ratioLRW);
 

            }
        });
});
