export function frequency(note) {
    // Define basic notes
    const notes = {
        C: 16.35,
        "C#": 17.32,
        D: 18.35,
        "D#": 19.45,
        E: 20.6,
        F: 21.83,
        "F#": 23.12,
        G: 24.5,
        "G#": 25.96,
        A: 27.5,
        "A#": 29.14,
        B: 30.87,
    };

    // Get octave number from input string
    const octave = parseInt(note[note.length - 1]);

    // Get note name from input string
    const noteName = note.slice(0, -1);

    // Calculate the frequency of the note by multiplying its base frequency by 2 raised to the power of the octave number
    const frequency = notes[noteName] * Math.pow(2, octave);

    return frequency;
}
