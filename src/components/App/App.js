import React from 'react';
import { useState } from 'react';
import '../../index.scss';

const questions = [
  {
    title: 'Who discovered America?',
    variants: ['Christopher Columbus', 'Giacomo Casanova', 'Leonardo da Vinci'],
    correct: 0,
  },
  {
    title: 'What is the capital of Scotland?',
    variants: ['Edinburg', 'Dublin', 'Reykjavik'],
    correct: 0,
  },
  {
    title: 'Which ruler was nicknamed the Lionheart?',
    variants: ['King Arthur', 'King Richard', 'Queen Elizabeth'],
    correct: 1,
  },
  {
    title: 'Нow many oceans are on the globe?',
    variants: ['three', 'five', 'four'],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed 3 answers out of 10</h2>
      <button>Try again</button>
    </div>
  );
}

function Game({ step, question, handleClickVariant }) {

  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((el, index) => (
          <li onClick={() => handleClickVariant(index)} key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = useState(0);
  const question = questions[step];

  const handleClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} handleClickVariant={handleClickVariant} /> 
        : <Result />
        
      }
    </div>
  );
}

export default App;