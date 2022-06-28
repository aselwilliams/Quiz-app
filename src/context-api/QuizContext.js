import { createContext,useState} from 'react';

export const QuizContext=createContext()

export const QuizProvider=({children})=>{
    const [gameState, setGameState]=useState('menu')
    return (
        <QuizContext.Provider value={{gameState, setGameState}}>
            {children}
        </QuizContext.Provider>
    )
}