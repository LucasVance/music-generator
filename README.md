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

### Chord synthesization
