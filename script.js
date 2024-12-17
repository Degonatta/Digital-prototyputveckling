function hide() {
   const buttons = document.querySelectorAll('.stone-button, .leaf-button');
   buttons.forEach(button => {
       button.style.display = 'none'; // Göm varje matchande element
   });

   const leafOne = document.querySelector('.willow-leaf-one');
   const leafTwo = document.querySelector('.willow-leaf-two');

   if (leafOne && leafTwo) {
      leafOne.style.display = 'none'; // Göm willow-leaf-one
      leafTwo.style.display = 'block'; // Visa willow-leaf-two
  }
}



//Array som parar bokstav mot siffra

//API som slumpar fram ett ord för barn i åldrar 3-7. 4-6 bokstäver.API

//Function som omvandlar ordet till siffror och lägger dom i enskilda rutor. 

//Function som ger knapparna ett id med bokstav och siffra 

//Function som jämför siffrorna från det omvandlade ordet med id på knappen.
  // If match - rutan ändras från siffra till korrekt bokstav

//Function som gör att om man trycker på rätt bokstav så blinkar det till i grönt och trycker man fel så blinkar det rött.