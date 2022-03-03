let posizioneLeft = 70; // fare funzionare il left, e l' up
let posizioneUp = 150;
function move(dir) {
  const elem = document.getElementById("nav");
  let up = 0;
  let left = 0;

  // attenzione alle variabili undefinded
  // la if se trova il valore lo 0 lo interpreta come falso
  // se trova un valore sopra lo 0 lo interpreta come vero
  // switch esegue diverse azioni in base a condizioni diverse
  switch (dir) {
    case 0:
      left = 10;
      break;
    case 1:
      left = -10;
      break;
    case 2:
      up = -10;
      break;
    case 3:
      up = 10;
      break;
    default:
      alert("il valore dir non è valido dir = " + dir);
  }

  // la if di prima ma scritta abbreviato
  //const val = dir === 0 ? 10 : -10;
  posizioneLeft = posizioneLeft + left;
  posizioneUp = posizioneUp + up;

  elem.style.marginLeft = posizioneLeft + "px";
  elem.style.marginTop = posizioneUp + "px";
}
