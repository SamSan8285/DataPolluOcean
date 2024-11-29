fetch(
    `Microplastic.json`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);
    })
);