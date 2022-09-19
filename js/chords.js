function generateChords(bars) {
    let chords = [];
    let totalBeats = 0;
    const targetBeats = bars * 4;

    while (totalBeats < targetBeats) {
        console.log("totalBeats: " + totalBeats);
        chord = Math.floor(Math.random() * 8);

        beats = 2 ** Math.floor(Math.random() * 4);
        console.log("beats: " + beats);
        if (beats <= targetBeats - totalBeats) {
            totalBeats += beats;
            chords.push({ chord: chord, beats: beats });
        }
    }

    return chords;
}

console.log(generateChords(8));
