export function generateChords(bars) {
    // Define empty chord array, totalBeats, and targetBeats
    let chords = [];
    let totalBeats = 0;
    // Since we are assuming the generated progression will be in 4/4, each bar is worth 4 beats
    const targetBeats = bars * 4;

    // While totalBeats is not up to targetBeats, generate random chords
    while (totalBeats < targetBeats) {
        const chord = Math.floor(Math.random() * 8);
        const beats = 2 ** Math.floor(Math.random() * 4);

        // Only push to the chords array if the new amount of beats won't overflow the targetBeats
        if (beats <= targetBeats - totalBeats) {
            totalBeats += beats;
            chords.push({ chord: chord, beats: beats });
        }
    }

    return chords;
}
