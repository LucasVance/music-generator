import { generateChords } from "./js/chords.js";
import { transpose } from "./js/transpose.js";

const submitBtn = document.getElementById("submitBtn");
const bars = document.getElementById("bars");
const resultBox = document.getElementById("result");
const key = document.querySelector('input[name="key"]:checked');

submitBtn.addEventListener("click", () => {
    let output = "";
    let chords = generateChords(bars.value);
    for (let i = 0; i < chords.length; i++) {
        output += `Play ${chords[i].chord} for ${chords[i].beats} beats \n`;
    }
    console.log(key);
    resultBox.innerText = output;
});
