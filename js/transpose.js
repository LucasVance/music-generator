export function transpose(note, currentKey) {
  // List of keys as an object consisting of named arrays
  const keys = {
    c: ["C", "D", "E", "F", "G", "A", "B"],
    cs: ["C#", "D#", "F", "F#", "G#", "A#", "C"],
    d: ["D", "E", "F#", "G", "A", "B", "C#"],
    ds: ["D#", "F", "G", "G#", "A#", "C", "D"],
    e: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    f: ["F", "G", "A", "A#", "C", "D", "E"],
    fs: ["F#", "G#", "A#", "B", "C#", "D#", "F"],
    g: ["G", "A", "B", "C", "D", "E", "F#"],
    gs: ["G#", "A#", "C", "C#", "D#", "F", "G"],
    a: ["A", "B", "C#", "D", "E", "F#", "G#"],
    as: ["A", "A#", "C", "D", "D#", "F", "G", "A"],
    b: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  };

  // Set current key
  switch (currentKey) {
    case "c":
      currentKey = keys.c;
      break;
    case "cs":
      currentKey = keys.cs;
      break;
    case "d":
      currentKey = keys.d;
      break;
    case "ds":
      currentKey = keys.ds;
      break;
    case "e":
      currentKey = keys.e;
      break;
    case "f":
      currentKey = keys.f;
      break;
    case "g":
      currentKey = keys.g;
      break;
    case "gs":
      currentKey = keys.gs;
      break;
    case "a":
      currentKey = keys.a;
      break;
    case "as":
      currentKey = keys.as;
      break;
    case "b":
      currentKey = keys.b;
      break;

    default:
      return "Please enter a valid key.";
  }

  return currentKey[note - 1];
};
