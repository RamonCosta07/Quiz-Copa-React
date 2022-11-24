// CSS
import "./GameOver.css";
// Context
import { QuizContext } from "../context/quiz";
import { useContext } from "react";
// Img
import endImg from "../img/gameover.png";

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game Over</h2>
      <p>Pontuação: {quizState.score} pontos</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={endImg} alt="Fim de jogo" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
}

export default GameOver;
