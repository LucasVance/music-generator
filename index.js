import { generateChords } from "./js/chords.js";

const button = document.getElementById("submitBtn");
button.addEventListener("click", writeChords);

function writeChords() {
  const result = document.getElementById("result");
  const bars = document.getElementById("bars");
  result.innerText = generateChords(bars.value);
}
