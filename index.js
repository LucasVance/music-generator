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

// Create empty chords array and key
let generatedChords = [];
let key = "";

// On click
submitBtn.addEventListener("click", () => {
    // Get current key from radio buttons
    key = document.querySelector('input[name="key"]:checked').value;
    // Generate array of chords
    generatedChords = generateChords(bars.value);
    console.log(generatedChords);
    // Declare empty string that will be added to
    let output = "";

    // Loop until chords is filled according to amount of bars inputted by user
    for (let i = 0; i < generatedChords.length; i++) {
        // Add string to output with newline
        output += `Play ${transpose(generatedChords[i].chord, key)} for ${
            generatedChords[i].beats
        } beats \n`;
    }
    // Set the result box to the output
    resultBox.innerText = output;
});

// Play chord on click
playButton.addEventListener("click", () => {
    // transpose generatedChords array
    const transposedChords = generatedChords.map(
        (currentChord) => transpose(currentChord.chord, key) + "4"
    );

    console.log(transposedChords);

    // loop through converting the transposedChords array to currentChord
    // array and play that chord after converting to frequencies

    const frequenciesNotes = [];

    for (let i = 0; i < transposedChords.length; i++) {
        console.log("do dis first");
        const parsedChord = parseChord(transposedChords[i], "major");

        playChord(parsedChord.map(frequency), 1000);
    }
});
