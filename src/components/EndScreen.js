import React,{useContext} from 'react';
import {QuizContext} from '../context-api/QuizContext';
import {Questions} from '../QBank'

function EndScreen() {
    const {score,setGameState,setScore}=useContext(QuizContext)

    const restartQuiz=()=>{
        setGameState('menu');
        setScore(0)
    }
  return (
    <div className='endScreen'>
        <h1>Quiz is Completed</h1>
        <h2>Your score: {score}/ {Questions.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen