//Referanse til html elementer
const secMeldinger = document.querySelector("#secMeldinger");
const uteSecMeldinger = document.querySelector("#uteSecMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");
const btnSend = document.querySelector("#btnSend");
// refferanse til fire Firebase

//Globale variabler
let user;

//skjekke om bruker er logget inn
firebase.auth().onAuthStateChanged( newUser =>{
  if(newUser){
    //sette user til den innloggende brukeren
    user = newUser;
    //Hendelsesfunksjon hvis bruker er innlogget
    console
    btnSend.onclick = sendMelding;
    meldinger.on("child_added",visMelding);
  }
  else{
    secMeldinger.innerHTML = `<p> Du er ikke innlogget, logg inn for å se meldinger</p>`
    <a herf= "Login.html"> Logg inn er </a>
  }
})


const db = firebase.database();
const meldinger = db.ref("messengerMeldinger");

//funksjonsdefenisjoner
function sendMedlding(){
  let nyMelding(){
    brukerId: user.email,
    brukerNavn: user.displayName,
    melding: inpmelding.value
  };
  meldinger.push(nyMelding);
  console.log("Melding sendt");
}

function visMelding(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.Val();
  secMeldinger.innerHTML += `<p>Brukernavn: ${objekt.brukerId} - ${objekt.melding}</p>`;
  scrollToBottom();

}




function scrollToBottom(){
  uteSecMeldinger.scrollHeight = uteSecMeldinger.scrollHeightheight;
}
