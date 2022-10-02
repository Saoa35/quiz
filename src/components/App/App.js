import '../../index.scss';

const questions = [
  {
    title: 'What is the capital of scotland?',
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

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Who discovered America?</h1>
      <ul>
        <li>Christopher Columbus</li>
        <li>Giacomo Casanova</li>
        <li>Leonardo da Vinci</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
