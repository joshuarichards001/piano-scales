type QuizType =
  | "notes"
  | "major-scale"
  | "natural-minor-scale"
  | "major-triad"
  | "minor-triad"
  | "diminished-triad"
  | "major-7th-chord"
  | "minor-7th-chord"
  | "dominant-7th-chord"
  | "half-diminished-7th-chord"
  | "diminished-7th-chord";

type KeyState =
  | "correct-pressed"
  | "incorrect-pressed"
  | "failed"
  | "not-pressed";

type QuizRecord = {
  quizType: QuizType;
  time: number;
};
