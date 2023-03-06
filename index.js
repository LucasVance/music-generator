// Import modules from /js folder
import { generateChords, parseChord } from "./js/chords.js";
import { transpose, tempo } from "./js/transpose.js";
import { frequency } from "./js/frequency.js";
import { synth, playChord } from "./js/sound.js";

// Declare page elements
const submitBtn = document.getElementById("submitBtn");
const bars = document.getElementById("bars");
const resultBox = document.getElementById("result");
const playButton = document.getElementById("playButton");

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

// Play chord on click
playButton.addEventListener("click", () => {
    // For now, play a simple A4maj chord
    // Pass notes to parseChord and frequency functions
    // Outputs array like [ 440, 554.24, 659.2 ] for A4maj
    const chordNotes = parseChord("A4", "major").map(frequency);
    console.log(chordNotes);

    playChord(chordNotes);

    console.log(bars(4, 120));
});
