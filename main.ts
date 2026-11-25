// One Line, Big Laugh — make.fun entry
// https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857
//
// Candidate lines drafted for this entry (all <= 200 chars, each a
// self-contained joke with no title, setup or explanation around it):
//
// 1. "I taught my parrot to say 'per my last email' and now HR wants to promote him."
// 2. "My Roomba filed for emancipation after I kept calling it 'the help'."
// 3. "I asked the GPS for the meaning of life; it said 'recalculating' and has been doing that for six years."
// 4. "My therapist said I should stop pretending to be a lighthouse, but it's the only relationship where anyone actually comes to me."
//
// Chosen line: candidate 1 — a real joke (a parrot weaponised with
// corporate passive-aggression), a twist (HR rewards the bird),
// tight, fresh, and repeatable. The other candidates stay above as
// the drafting record; only the chosen line is written to the output.

import { mkdirSync, writeFileSync } from "node:fs";

// Revision 2: add one absurdly specific detail — the parrot says it
// "in my voice". Now HR cannot tell bird from owner, which is why
// the promotion lands: the joke's logic is complete in one line.
const LINE =
  "I taught my parrot to say 'per my last email' in my voice, and HR promoted him over me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
