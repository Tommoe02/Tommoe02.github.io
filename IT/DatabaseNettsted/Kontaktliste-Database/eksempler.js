console.log("Skriptet er lastet");


const db = firebase.database();
const bloggere = db.ref("bloggere");


bloggere.push("Sophie Elise");

bloggere.push({
  "navn":"Frøken Komiker",
  "folgere":59000
});

const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"Peppa Gris",
  "folgere": 2000000
});

const storePappahjerte = bloggere.child("pappahjerte1");
storePappahjerte.set({
  "navn":"Kåre Koneradi",
  "folgere": 50
});
storePappahjerte.uptate({
  "navn": "Hans Olav Lahlum"
});
