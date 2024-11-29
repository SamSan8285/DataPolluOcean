fetch(
    `Microplastic.json`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);


    const donnees = data.layers[0].features;
    const donnesTrier = [];
    donnees.forEach(element => {
        donnesTrier.push({Date : element.attributes.Date})
        // Convertir la date timestamp date
    });

    console.log(donnees);
    console.log (donnesTrier)


    })
);
