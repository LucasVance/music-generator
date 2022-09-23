export function transpose(note, key) {
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

  switch (key) {
    case "c":
      key = keys.c;
      break;
    case "cs":
      key = keys.cs;
      break;
    case "d":
      key = keys.d;
      break;
    case "ds":
      key = keys.ds;
      break;
    case "e":
      key = keys.e;
      break;
    case "f":
      key = keys.f;
      break;
    case "g":
      key = keys.g;
      break;
    case "gs":
      key = keys.gs;
      break;
    case "a":
      key = keys.a;
      break;
    case "as":
      key = keys.as;
      break;
    case "b":
      key = keys.b;
      break;

    default:
      return "Please enter a valid key.";
  }

  return key[note - 1];
}
