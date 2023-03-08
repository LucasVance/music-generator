export function generateChords(bars) {
    // Define empty chord array, totalBeats, and targetBeats
    let chords = [];
    let totalBeats = 0;
    // Since we are assuming the generated progression will be in 4/4, each bar is worth 4 beats
    const targetBeats = bars * 4;

    // While totalBeats is not up to targetBeats, generate random chords
    while (totalBeats < targetBeats) {
        const chord = Math.floor(Math.random() * 7) + 1;
        const beats = 2 ** Math.floor(Math.random() * 4);

        // Only push to the chords array if the new amount of beats won't overflow the targetBeats
        if (beats <= targetBeats - totalBeats) {
            totalBeats += beats;
            chords.push({ chord: chord, beats: beats });
        }
    }

    // Return the final chords array to user
    return chords;
}

export function parseChord(chord, quality) {
    // Define the notes of a major and minor chord relative to the root note
    const majorIntervals = [0, 4, 7];
    const minorIntervals = [0, 3, 7];

    // Convert the chord name to the root note and octave
    const noteRegex = /^([A-G]#?)(\d)$/;
    const [, noteLetter, octave] = chord.match(noteRegex);
    const rootNoteMidiNumber =
        (parseInt(octave) + 1) * 12 +
        "C C#D D#E F F#G G#A A#B ".indexOf(noteLetter + " ") / 2;

    // Determine which intervals to use based on chord quality
    const intervals = quality === "major" ? majorIntervals : minorIntervals;

    // Calculate the MIDI numbers of each note in the chord
    const chordNotesMidiNumbers = intervals.map(
        (interval) => rootNoteMidiNumber + interval
    );

    // Convert the MIDI numbers back to note names
    const noteNames = chordNotesMidiNumbers
        .map((midiNumber) => {
            const octave = Math.floor(midiNumber / 12) - 1;
            const noteIndex = midiNumber % 12;
            return (
                "C C#D D#E F F#G G#A A#B ".slice(
                    noteIndex * 2,
                    noteIndex * 2 + 2
                ) + octave
            );
        })
        .map((name) => name.replace(/\s/g, "")); // Remove whitespace from each string element

    return noteNames;
}
