// Dictionary för att hålla koll på de olika orden baserat på roll
const ordDict = {
   "roll-1": "STEN",
   "roll-2": "SIMMA",
   "roll-3": "GREN",
   "roll-4": "SVAMP",
   "roll-5": "WILLOW"
};

// Hämta roll-parametern från URL
const urlParams = new URLSearchParams(window.location.search);
const rollVald = urlParams.get('roll');

let ord = ordDict[rollVald] || "SIMMA"; // Standardord, du kan ändra här till exempelvis "roll-one"
let siffror = ordTillSiffror(ord); // Gör om ordet till siffror
let nuvarandeIndex = 0; // Håller reda på vilken siffra som ska matchas

// Funktion för att dölja vissa element på sidan
function hide() {
  const buttons = document.querySelectorAll('.stone-button, .leaf-button, .branch-button');
  buttons.forEach(button => {
      button.style.display = 'none'; // Göm varje matchande element
  });

  const leafOne = document.querySelector('.willow-leaf-one');
  const leafTwo = document.querySelector('.willow-leaf-two');

  if (leafOne && leafTwo) {
     leafOne.style.display = 'none'; // Göm willow-leaf-one
     leafTwo.style.display = 'block'; // Visa willow-leaf-two
  }

  const stoneOne = document.querySelector('.willow-stone-one');
  const stoneTwo = document.querySelector('.willow-stone-two');

  if (stoneOne && stoneTwo) {
     stoneOne.style.display = 'none'; // Göm willow-leaf-one
     stoneTwo.style.display = 'block'; // Visa willow-leaf-two
  }

  const branchOne = document.querySelector('.willow-branch-one');
  const branchTwo = document.querySelector('.willow-branch-two');

  if (branchOne && branchTwo) {
     branchOne.style.display = 'none'; // Göm willow-leaf-one
     branchTwo.style.display = 'block'; // Visa willow-leaf-two
  }
}

// Konvertera ordet till siffror
function ordTillSiffror(ord) {
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
  return Array.from(ord.toUpperCase()).map(bokstav => alfabet.indexOf(bokstav) + 1);
}

// Visa siffrorna på skärmen
function visaSiffror(siffror) {
  const numberDisplay = document.getElementById("number-display");
  numberDisplay.innerHTML = ""; // Rensa tidigare innehåll

  siffror.forEach(siffra => {
     const ruta = document.createElement("div");
     ruta.className = "number-box"; // Lägg till rätt CSS-klass för styling
     ruta.textContent = siffra; // Visa siffran
     numberDisplay.appendChild(ruta); // Lägg till den nya div:en till number-display
  });
}

// Kontrollera om bokstaven användaren klickade på är korrekt
function kontrolleraBokstav(bokstav) {
  const korrektSiffra = siffror[nuvarandeIndex]; // Hämtar nuvarande siffra
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
  const klickadSiffra = alfabet.indexOf(bokstav) + 1;

   console.log('klickad', klickadSiffra)
   console.log('korrekt', korrektSiffra)

  if (klickadSiffra === korrektSiffra) {
     // Om det är rätt, byt siffran till bokstaven
     const numberDisplay = document.getElementById("number-display");
     const rutor = numberDisplay.querySelectorAll(".number-box"); // Använd rätt klass
     rutor[nuvarandeIndex].textContent = bokstav; // Ändra siffran till bokstav
     nuvarandeIndex++; // Gå vidare till nästa siffra

     // Kontrollera om ordet är klart
     if (nuvarandeIndex === siffror.length) {
     }
  } else {
     alert("Fel bokstav, försök igen!");
  }
}

// Lägg till event-lyssnare på alfabet-knapparna
document.querySelectorAll(".alphabet-buttons button").forEach(knapp => {
  knapp.addEventListener("click", () => {
     kontrolleraBokstav(knapp.dataset.letter); // Kontrollera rätt bokstav
  });
});

// Lägg till event-lyssnare för att uppdatera ordet baserat på rollen
document.querySelectorAll(".role-button").forEach(button => {
  button.addEventListener("click", () => {
     const roll = button.dataset.role; // Hämta den roll som valts (t.ex. "roll-one")
     ord = ordDict[roll]; // Uppdatera ordet baserat på rollen
     siffror = ordTillSiffror(ord); // Konvertera det nya ordet till siffror
     nuvarandeIndex = 0; // Återställ index
     visaSiffror(siffror); // Visa siffrorna för det nya ordet
  });
});

// Visa siffrorna när sidan laddas
visaSiffror(siffror);



//Array som parar bokstav mot siffra


//API som slumpar fram ett ord för barn i åldrar 3-7. 4-6 bokstäver.API

//Function som omvandlar ordet till siffror och lägger dom i enskilda rutor. 

//Function som ger knapparna ett id med bokstav och siffra 

//Function som jämför siffrorna från det omvandlade ordet med id på knappen.
  // If match - rutan ändras från siffra till korrekt bokstav

//Function som gör att om man trycker på rätt bokstav så blinkar det till i grönt och trycker man fel så blinkar det rött.