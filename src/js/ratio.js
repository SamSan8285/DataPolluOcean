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
            }
        });
});
