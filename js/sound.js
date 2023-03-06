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

export function playChord(chord, duration) {
    // Create new group
    const group = new Pizzicato.Group();

    // Add new sounds to group
    group.addSound(
        new Pizzicato.Sound({
            source: "wave",
            options: {
                type: "sine",
                frequency: 440,
                detached: true,
            },
        })
    );
}
