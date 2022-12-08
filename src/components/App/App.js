import React from "react";
import { useState } from "react";
import "../../index.scss";
import { Game } from "../Game";
import { Result } from "../Result";

const questions = [
  {
    title: "Who discovered America?",
    variants: ["Christopher Columbus", "Giacomo Casanova", "Leonardo da Vinci"],
    correct: 0,
  },
  {
    title: "What is the capital of Scotland?",
    variants: ["Edinburg", "Dublin", "Reykjavik"],
    correct: 0,
  },
  {
    title: "Which ruler was nicknamed the Lionheart?",
    variants: ["King Arthur", "King Richard", "Queen Elizabeth"],
    correct: 1,
  },
  {
    title: "Нow many oceans are on the globe?",
    variants: ["three", "five", "four"],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const handleClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          handleClickVariant={handleClickVariant}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
