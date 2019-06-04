// Referanser til HTML elementer

const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");
const utesecmld = document.querySelector("#uteSecMld");

//Referanser til firebase databasen

const db = firebase.database();
const meldinger = db.ref("messengerMeldinger");
const btnSend = document.querySelector("#btnSend");

// Globale variabler
let user;

// Sjekke om bruker er logget inn
firebase.auth().onAuthStateChanged(newUser => {
  if(newUser){
    // Sette user til den innloggede brukeren
    user = newUser;
    //Hendelsesfunksjoner hvis bruker er innlogget
    console.log(user);
    btnSend.onclick = sendMelding;
    meldinger.on("child_added",visMelding);
  } else {
    secMeldinger.innerHTML = `<p>Du er ikke logget inn</p>
    <a href="login.html">Logg inn her</a>
    `;
  }
})

//Funksjonsdefinisjoner

function sendMelding(){
  let nyMelding = {
    brukerID: user.email,
    brukernavn: user.displayName,
    melding: inpMelding.value
  };
  meldinger.push(inpMelding.value);
  console.log("melding sendt");
}

function visMelding(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();
  secMeldinger.innerHTML += <p>${objekt.brukerID} - ${objekt.melding}</p>;
  scrollToBottom();
}

//Hendelsesfunksjoner


//Spørring til databasen


function scrollToBottom(){
  utesecmld.scrollTop = utesecmld.scrollHeight;
}
