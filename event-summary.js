function Display() {
  const btn = document.getElementById("input-text");

  btn.innerText = "Have a Nice day!";
}

function show() {
  document.getElementById("input-text").innerText =
    "Input Text is Showing anonymously";
}

const btn = document.getElementById("update-btn");
btn.addEventListener("click", function () {
  const input = document.getElementById("input-field");
  const inputTextDisplay = input.value;

  const h2tag = document.getElementById("input-text");
  h2tag.innerText = inputTextDisplay;
  input.value = "";
});
