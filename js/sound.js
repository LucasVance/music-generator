export function synth() {
    console.log("hey, at least the button works");
    // Create new saw
    const sawtoothWave = new Pizzicato.Sound({
        source: "wave",
        options: {
            type: "sine",
            frequency: 440,
        },
    });

    // Play synth
    sawtoothWave.play();
}

export function playChord(notes, duration) {
    // Create new group
    const group = new Pizzicato.Group();

    // Add new notes to chord group using for loop
    for (let i = 0; i < notes.length; i++) {
        group.addSound(
            new Pizzicato.Sound({
                source: "wave",
                options: {
                    type: "sine",
                    frequency: notes[i],
                },
            })
        );
    }

    // Play chord
    group.play();

    // Stop sound after
    setTimeout(() => {
        console.log("trying to stop");
        group.stop();
    }, duration);
}
