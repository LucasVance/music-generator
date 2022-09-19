// This will be the script that generates the chords and exports an array of objects

let chords = [];
chords.push({ chord: 1, beats: 4 });

function generateFactorOf(num) {
    // Declare minimum and maximum values; maximum is 3 because I will be using this as a factor of 2, and 2^3 = 8, which is the real max number that I want.
    const min = 0;
    const max = 4;

    // Generate number between 0 and 3
    return num ** Math.floor(Math.random() * (max - min) + min);
}

const bars = 8;
let totalBeats = 0;

while (totalBeats < bars * 4) {
    chord = Math.floor(Math.random() * 8);
    beats = generateFactorOf(2);
    totalBeats += beats;
    chords.push({ chord: chord, beats: beats });
}

console.log(chords);
