# Music Generator

## The Big Picture / Chord Chart

| I   | IIm | IIIm | IV  | V   | VIm | VIIdim |
| --- | --- | ---- | --- | --- | --- | ------ |
| C   | Dm  | Em   | F   | G   | Am  | Bdim   |
| C#  | D#m | Fm   | F#  | G#  | A#m | Cdim   |
| D   | Em  | F#m  | G   | A   | Bm  | C#dim  |
| D#  | Fm  | Gm   | G#  | A#  | Cm  | Ddim   |
| E   | F#m | G#m  | A   | B   | C#m | D#dim  |
| F   | Gm  | Am   | A#  | C   | Dm  | Edim   |
| F#  | G#m | A#m  | B   | C#  | D#m | Fdim   |
| G   | Am  | Bm   | C   | D   | Em  | F#dim  |
| G#  | A#m | Cm   | C#  | D#  | Fm  | Gdim   |
| A   | Bm  | C#m  | D   | E   | F#m | G#dim  |
| A#  | Cm  | Dm   | D#  | F   | Gm  | Adim   |
| B   | C#m | D#m  | E   | F#  | G#m | A#dim  |

---

## Code flowmap

### Chord generation

0. Create empty array of objects (**chords**) that will store chord progression data
1. Start with I chord
2. Generate random number that will correspond to a chord later
3. Generate random rest time of factors of 2 with a max of 8
4. Store this in the **chords** array
5. Repeat steps 1-4 **x** many times

### Sample chord generation output:

raw output:
[{ chord: 5, beats: 4 },
{ chord: 0, beats: 8 },
{ chord: 7, beats: 2 },
{ chord: 2, beats: 2 }]  
readable output:
Play G for 4 beats
Play nothing for 8 beats
Play B for 2 beats
Play D for 2 beats

### Chord synthesization

Take current object in the array `let currentChord = output[i]`  
Tranpose chord `currentChord = tranpose(currentChord)`  
Parse chord `let chordNotes = parseChord(currentChord, "major")` (note: use all major chords for now, but this will sound weird until proper major and minor chords are used)  
Create chordDurations array `const chordDurations.map(chordObj => chordObj.beats)`  
Map frequencies`chordNotes = chordNotes.map(frequency)`Send this array to`playSound.js`

playSound.js steps:
create new group

inside loop:
create three new pizzicato sounds `note1, note2, note3`
add all sounds to group  
play group  
stop group  
remove all sounds from group
