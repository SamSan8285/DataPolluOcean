fetch(
    `Microplastic.json`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);


    const donnees = data.attributes;
    console.log(donnees);
    })
);
