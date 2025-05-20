import {
  anakiwa,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level1 = {
  size: 4,
  colorRegions: [
    ["A", "A", "C", "C"],
    ["A", "B", "C", "C"],
    ["A", "B", "D", "D"],
    ["A", "B", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
  },
};

export default level1;
