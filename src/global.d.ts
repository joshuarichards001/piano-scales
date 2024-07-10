type Quiz = {
  questions: number[][];
  currentQuestion: number[];
  currentQuestionIndex: number;
  score: number;
  isCompleted: boolean;
  finalTime: number;
};

type QuizType =
  | "notes"
  | "major-scale"
  | "natural-minor-scale"
  | "harmonic-minor-scale"
  | "ionian-mode"
  | "dorian-mode"
  | "phrygian-mode"
  | "lydian-mode"
  | "mixolydian-mode"
  | "aeolian-mode"
  | "locrian-mode"
  | "major-triad"
  | "minor-triad"
  | "diminished-triad"
  | "major-7th-chord"
  | "minor-7th-chord"
  | "dominant-7th-chord"
  | "half-diminished-7th-chord"
  | "diminished-7th-chord";

type QuizTypeRecord = {
  quizType: QuizType;
  time: number;
};

type QuizTypeData = {
  keys: number[];
  name: string;
  info: string;
  colour: string;
};

type KeyState = "correct-pressed" | "incorrect-pressed" | "not-pressed";
