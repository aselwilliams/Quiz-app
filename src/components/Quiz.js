import React, { useState, useContext } from "react";
import { Questions } from "../QBank";
import { QuizContext } from "../context-api/QuizContext";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [chosen, setChosen] = useState("");
  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === chosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === chosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button className="finish" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
