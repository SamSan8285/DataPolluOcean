fetch(
    `https://query.wikidata.org/sparql?query=SELECT%20?Iut%20?IutLabel%20?localisation_administrative%20?localisation_administrativeLabel%20?codeInsee%20WHERE%20{%20%20%20SERVICE%20wikibase:label%20{%20bd:serviceParam%20wikibase:language%20"[AUTO_LANGUAGE],mul,en".%20}%20%20%20?Iut%20wdt:P31%20wd:Q3152659;%20%20%20%20%20wdt:P17%20wd:Q142.%20%20%20OPTIONAL%20{%20?Iut%20wdt:P131%20?localisation_administrative.%20?localisation_administrative%20wdt:P374%20?codeInsee.}%20}%20LIMIT%2010000&format=json`
  ).then((d) =>
    d.json().then(function (data) {
      console.log(data);
    })
);