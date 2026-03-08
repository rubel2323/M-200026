function makeGreen() {
  document.body.style.background = "green";
}

const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makingItBlue;

function makingItBlue() {
  document.body.style.background = "blue";
}

const makeYellow = document.getElementById("make-yellow");
makeYellow.onclick = function makingItYellow() {
  document.body.style.background = "yellow";
};
