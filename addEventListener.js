function makeGreen() {
  document.body.style.background = "green";
}

const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makingItBlue;

function makingItBlue() {
  document.body.style.background = "blue";
}

const makeYellow = document.getElementById("make-yellow");
makeYellow.onclick = function () {
  document.body.style.background = "yellow";
};

// ------------------------
const goldenColor = document.getElementById("goldenRod");
goldenColor.addEventListener("click", makeGolden);

function makeGolden() {
  document.body.style.backgroundColor = "goldenrod";
}

// Another style
const orangeColor = document.getElementById("orange");
orangeColor.addEventListener("click", function makeorange() {
  document.body.style.background = "orange";
});

////
document.getElementById("grey").addEventListener("click", function () {
  document.body.style.backgroundColor = "grey";
});
