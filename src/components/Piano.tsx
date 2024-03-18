import { useEffect } from "react";
import { OCTAVE } from "../constants";
import { getKeyState } from "../functions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetKeys } from "../redux/slices/pressedKeysSlice";
import {
  setCurrentQuestionIndex,
  setIsCompleted,
  setScore,
} from "../redux/slices/quizSlice";
import Key from "./Key";

export default function Piano() {
  const dispatch = useAppDispatch();
  const pressedKeys = useAppSelector((state) => state.pressedKeys);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const currentQuestionIndex = useAppSelector(
    (state) => state.quiz.currentQuestionIndex,
  );
  const quizLength = useAppSelector((state) => state.quiz.questions.length);
  const score = useAppSelector((state) => state.quiz.score);

  useEffect(() => {
    if (
      currentQuestion.every((key) =>
        pressedKeys.map((k) => k % 12).includes(key),
      )
    ) {
      const timeout = setTimeout(() => {
        if (pressedKeys.length === currentQuestion.length) {
          dispatch(setScore(score + 1));
        }
        if (currentQuestionIndex === quizLength - 1) {
          dispatch(setIsCompleted(true));
          return;
        }
        dispatch(resetKeys());
        dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [
    pressedKeys,
    currentQuestion,
    dispatch,
    score,
    currentQuestionIndex,
    quizLength,
  ]);

  return (
    <div className="flex overflow-x-scroll whitespace-nowrap">
      {[0, 1].map((octaveNum) =>
        OCTAVE.map((note, i) => (
          <Key
            key={octaveNum * OCTAVE.length + i}
            note={note}
            keyIndex={octaveNum * OCTAVE.length + i}
            keyState={getKeyState(
              octaveNum * OCTAVE.length + i,
              pressedKeys,
              currentQuestion,
            )}
          />
        )),
      )}
    </div>
  );
}
