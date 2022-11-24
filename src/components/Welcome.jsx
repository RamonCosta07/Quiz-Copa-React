// React
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
// CSS
import "./Welcome.css";
// Image
import Quiz from "../img/unnamed.png";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Bem vindo ao Quiz</h2>
      <p>Clique no botão para começarmos</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Iniciar</button>
      <img src={Quiz} alt="Tela inicial do quiz" />
    </div>
  );
};

export default Welcome;
