//Variabler til database

const db = firebase.database();
const kontaktListe = db.ref("kontaktListe");

//variabler som refererer til HTML-Elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");
//.innerHTML = "Hei hei";
/*
function f(x){
  secKontakter.innerHTML= x
}

f("Hei hei hei")
*/
function registrerKontakter (hendelse){
  hendelse. preventDefault();
  const key = inpTelefon.value;
  const data = {
    "navn": inpNavn.value,
    "Epost": inpEpost.value
  };
  const kontakt = kontaktListe.child(key);
  kontakt. set(data);
}
skjema.addEventListener("submit",registrerKontakter);
function visKontakter(snapshot){
  const Telefon = snapshot.key;
  const kontakt = snapshot.val();
  secKontakter.innerHTML +=`
  <div>${kontakt.navn}</div>
  <div>${Telefon}</div>
  <div>${kontakt.Epost}</div>
  `;
}
kontaktListe.on("child_added",visKontakter);
