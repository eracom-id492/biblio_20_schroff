// This example is adapted from https://codepen.io/cinquantesix/pen/DEyoH
// I removed the jQuery dependency.

// la méthode setInterval permet de répéter une fonction à intervalles réguliers, définis en milliseconde.
var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  // créer un objet de type Date, qu'on sauve dans la variable "d".
  var d = new Date();

  // créer des variables pour les secondes, minutes, heures.
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();

  // transformer les chiffres pour obtenir leur position en degrés sur le cercle de l'horloge.


  // appliquer une rotation CSS aux aiguilles.
  document.querySelector("#seconds").innerHTML =
    s;

  document.querySelector("#minutes").innerHTML =
    m;

  document.querySelector("#hours").innerHTML =
    h;
}
