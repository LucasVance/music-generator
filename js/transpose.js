export function transpose(note, currentKey) {
    // List of keys as an object consisting of named arrays
    const keys = {
        C: ["nothing", "C", "D", "E", "F", "G", "A", "B"],
        "C#": ["nothing", "C#", "D#", "F", "F#", "G#", "A#", "C"],
        D: ["nothing", "D", "E", "F#", "G", "A", "B", "C#"],
        "D#": ["nothing", "D#", "F", "G", "G#", "A#", "C", "D"],
        E: ["nothing", "E", "F#", "G#", "A", "B", "C#", "D#"],
        F: ["nothing", "F", "G", "A", "A#", "C", "D", "E"],
        "F#": ["nothing", "F#", "G#", "A#", "B", "C#", "D#", "F"],
        G: ["nothing", "G", "A", "B", "C", "D", "E", "F#"],
        "G#": ["nothing", "G#", "A#", "C", "C#", "D#", "F", "G"],
        A: ["nothing", "A", "B", "C#", "D", "E", "F#", "G#"],
        "A#": ["nothing", "A#", "C", "D", "D#", "F", "G", "A"],
        B: ["nothing", "B", "C#", "D#", "E", "F#", "G#", "A#"],
    };

    // Check if currentKey exists in the keys object
    if (!keys.hasOwnProperty(currentKey)) {
        return "Please enter a valid key.";
    }

    // Map the currentKey input to the corresponding array in the keys object
    const keyArray = keys[currentKey];

    // Return the note at the index of note - 1 in the keyArray
    return keyArray[note];
}

export function tempo(beats, bpm) {
    return (beats * 60000) / bpm;
}
