import {useState,useContext} from 'react';
import { QuizContext } from './context-api/QuizContext';
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';


function App() {
  // const [gameState, setGameState]=useState('menu')
  const {gameState,setGameState}=useContext(QuizContext)
  return (
    <div className="App">
   <h1>Quiz App</h1>
   {gameState==='menu' && <MainMenu />}
   {gameState==='quiz' && <Quiz />}
   {gameState==='endScreen' && <EndScreen />}
    </div>
  );
}

export default App;
