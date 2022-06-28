import React,{useState} from 'react';
import {Questions} from '../QBank'

function Quiz() {
    const [currQuestion, setCurrQuestion]=useState(0)
    const [chosen, setChosen]=useState('')

    const nextQuestion=()=>{
        
    }
  return (
    <div className='quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={()=>setChosen('A')}>{Questions[currQuestion].optionA}</button>
            <button onClick={()=>setChosen('B')}>{Questions[currQuestion].optionB}</button>
            <button onClick={()=>setChosen('C')}>{Questions[currQuestion].optionC}</button>
            <button onClick={()=>setChosen('D')}>{Questions[currQuestion].optionD}</button>
        </div>
        <button onClick={()=>setCurrQuestion(currQuestion<Questions.length-1 ? currQuestion+1 : 0)}>Next Question</button>
    </div>
  )
}

export default Quiz