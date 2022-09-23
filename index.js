import { generateChords } from "./js/chords.js";

const button = document.getElementById("submitBtn");
button.addEventListener("click", writeChords);

function writeChords() {
  let result = document.getElementById("result");
  let bars = document.getElementById("bars");
  result.innerText = generateChords(bars.value);
}
