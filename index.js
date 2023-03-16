// Import modules from /js folder
import { generateChords } from "./js/chords.js";
import { transpose } from "./js/transpose.js";
import { frequency } from "./js/frequency.js";

// Declare page elements
const submitBtn = document.getElementById("submitBtn");
const playBtn = document.getElementById("playBtn");
const bars = document.getElementById("bars");
const resultBox = document.getElementById("result");

// On click
submitBtn.addEventListener("click", () => {
    // Get current key from radio buttons
    const key = document.querySelector('input[name="key"]:checked').value;
    // Generate array of chords
    const chords = generateChords(bars.value);
    console.log(chords);
    // Declare empty string that will be added to
    let output = "";

    // Loop until chords is filled according to amount of bars inputted by user
    for (let i = 0; i < chords.length; i++) {
        // Add string to output with newline
        output += `Play ${transpose(chords[i].chord, key)} for ${
            chords[i].beats
        } beats \n`;
    }
    // Set the result box to the output
    resultBox.innerText = output;
});

// Play sound on click
playBtn.addEventListener("click", () => {});
