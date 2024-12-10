document.addEventListener("DOMContentLoaded", function () {
    let oceanPlasticLeakageValues = [];
    let riversLakesPlasticLeakageValues = [];
    let worldPlasticProductionValues = [];
  
    // Charger les données de déchets plastiques dans les océans
    fetch(`json/ocean-waste.json`)
      .then((d) => d.json())
      .then((dataOceanWaste) => {
        oceanPlasticLeakageValues = dataOceanWaste.map(
          (item) => item.OceanPlasticLeakage
        );
        console.log("Ocean Plastic Leakage Values:", oceanPlasticLeakageValues);
      });
  
    // Charger les données de déchets plastiques dans les lacs et rivières
    fetch(`json/lakes-rivers-waste.json`)
      .then((d) => d.json())
      .then((dataLakesRiversWaste) => {
        riversLakesPlasticLeakageValues = dataLakesRiversWaste.map(
          (item) => item.lrWaste
        );
        console.log(
          "Lakes and Rivers Plastic Leakage Values:",
          riversLakesPlasticLeakageValues
        );
      });
  
    // Charger les données de production mondiale de plastique
    fetch(`json/world-plastic-production.json`)
      .then((d) => d.json())
      .then((dataPlasticProduction) => {
        worldPlasticProductionValues = dataPlasticProduction.map(
          (item) => item.AnnualPlasticProduction
        );
        console.log(
          "World Plastic Production Values:",
          worldPlasticProductionValues
        );
  
        // Calculer les ratios lorsque toutes les données sont disponibles
        if (
          oceanPlasticLeakageValues.length > 0 &&
          riversLakesPlasticLeakageValues.length > 0
        ) {
          const oceanRatios = oceanPlasticLeakageValues.map((value, index) => {
            const production = worldPlasticProductionValues[index] || 1; // Éviter la division par zéro
            return value / production;
          });
  
          const lakesRiversRatios = riversLakesPlasticLeakageValues.map(
            (value, index) => {
              const production = worldPlasticProductionValues[index] || 1; // Éviter la division par zéro
              return value / production;
            }
          );
  
          console.log("Ratios for Ocean Plastic Leakage:", oceanRatios);
          console.log(
            "Ratios for Lakes and Rivers Plastic Leakage:",
            lakesRiversRatios
          );
  
          // Extraire chaque tableau de ratios pour les océans et les lacs/rivières
          const ratioOceans = [
            oceanRatios.slice(0, 20), // Amériques
            oceanRatios.slice(20, 40), // Asie
            oceanRatios.slice(40, 60), // Chine
            oceanRatios.slice(60, 80), // Europe
            oceanRatios.slice(80, 100), // Inde
            oceanRatios.slice(100, 120), // Moyen-Orient & Afrique du Nord
            oceanRatios.slice(120, 140), // Océanie
            oceanRatios.slice(140, 160), // Afrique Subsaharienne
            oceanRatios.slice(160, 180), // États-Unis
            oceanRatios.slice(180, 200)  // Monde/Total
          ];
  
          const ratioLakesRivers = [
            lakesRiversRatios.slice(0, 20), // Amériques
            lakesRiversRatios.slice(20, 40), // Asie
            lakesRiversRatios.slice(40, 60), // Chine
            lakesRiversRatios.slice(60, 80), // Europe
            lakesRiversRatios.slice(80, 100), // Inde
            lakesRiversRatios.slice(100, 120), // Moyen-Orient & Afrique du Nord
            lakesRiversRatios.slice(120, 140), // Océanie
            lakesRiversRatios.slice(140, 160), // Afrique Subsaharienne
            lakesRiversRatios.slice(160, 180), // États-Unis
            lakesRiversRatios.slice(180, 200)  // Monde/Total
          ];
  
          // Créer le graphique des océans
          const oceanChartCtx = document.getElementById('oceanChart').getContext('2d');
          let oceanChart = new Chart(oceanChartCtx, {
            type: 'line',
            data: {
              labels: ['2000','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'], // Exemple d'années
              datasets: [{
                label: 'Pollution Océan (Ratio)',
                data: ratioOceans[0], // Affiche les données des Amériques par défaut
                borderColor: 'blue',
                fill: false,
                tension: 0.1
              }]
            }
          });
  
          // Créer le graphique des lacs/rivières
          const lakesRiversChartCtx = document.getElementById('lakesRiversChart').getContext('2d');
          let lakesRiversChart = new Chart(lakesRiversChartCtx, {
            type: 'line',
            data: {
                labels: ['2000','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'], // Exemple d'années
                datasets: [{
                label: 'Pollution Lacs/Rivières (Ratio)',
                data: ratioLakesRivers[0], // Affiche les données des Amériques par défaut
                borderColor: 'green',
                fill: false,
                tension: 0.1
              }]
            }
          });
  
          // Mettre à jour le graphique des océans en fonction du choix de l'utilisateur
          document.getElementById('oceanSelector').addEventListener('change', function(event) {
            const selectedIndex = event.target.value;
            oceanChart.data.datasets[0].data = ratioOceans[selectedIndex];
            oceanChart.update();
          });
  
          // Mettre à jour le graphique des lacs/rivières en fonction du choix de l'utilisateur
          document.getElementById('lakesRiversSelector').addEventListener('change', function(event) {
            const selectedIndex = event.target.value;
            lakesRiversChart.data.datasets[0].data = ratioLakesRivers[selectedIndex];
            lakesRiversChart.update();
          });
        }
      });
  });
  