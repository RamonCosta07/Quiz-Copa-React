// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import GameOver from './components/GameOver';
// React
import { useContext, useEffect } from 'react';
// Context
import { QuizContext } from './context/quiz';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // misturar perguntas
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])

  return (
    <div className="App">
      <h1>Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GameOver /> }
    </div>
  )
}

export default App
