fetch(
    `json/Microplastic.json`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);


    const donnees = data.layers[0].features;
    const donneesDates = [];
    const donneesLongitude = [];
    const donneesLatitude = [];
    const donneesDensitude = [];
    const donneesDensitudeText = [];
    const donneesOceans = [];
    const allData = [];

    donnees.forEach(element => {
        donneesDates.push({Date : element.attributes.Date})
                // Convertir la date timestamp date
        donneesLongitude.push({Longitudes : element.attributes.Longitude})
        donneesLatitude.push({Latitude : element.attributes.Latitude})
        donneesDensitude.push({Densitude : element.attributes.DENSRANGE})
        donneesDensitudeText.push({DensitudeText : element.attributes.DENSTEXT})
        donneesOceans.push({Oceans : element.attributes.OCEANS})

    });

    donnees.forEach((element) => {
      // Créer un objet combinant toutes les données pour un élément
      const dataEntry = {
        Date: element.attributes.Date,
        Longitude: element.attributes.Longitude,
        Latitude: element.attributes.Latitude,
        Densitude: element.attributes.DENSRANGE,
        DensitudeText: element.attributes.DENSTEXT,
        Oceans: element.attributes.OCEANS,
      };
      allData.push(dataEntry);
    });



    console.log(donnees);
    console.log (donneesDates)
    console.log (donneesLongitude)
    console.log (donneesLatitude)
    console.log (donneesDensitude)
    console.log (donneesDensitudeText)
    console.log (donneesOceans)
    console.log (allData)

    })
);

document.querySelector('.quizz-LR').addEventListener('click',function(e){
document.querySelector('.bonne_reponse').style.display='block'
document.querySelector('.bonne_reponse').style.color='green'
document.querySelector('.close_reponse').style.display='block'
});

document.querySelector('.quizz-Oceans').addEventListener('click',function(e){
document.querySelector('.mauvaise_reponse').style.display='block'
document.querySelector('.mauvaise_reponse').style.color='red'
document.querySelector('.close_reponse').style.display='block'
});

document.querySelector('.close_reponse').addEventListener('click',function(e){
  document.querySelector('.bonne_reponse').style.display='none'
  document.querySelector('.mauvaise_reponse').style.display='none'
  document.querySelector('.close_reponse').style.display='none'
});


