import React, { useContext } from "react";
import { QuizContext } from "../context-api/QuizContext";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;
