fetch(
    `Microplastic.csv`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);
    })
);