export function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="img"
      />
      <h2>
        You guessed {correct} answers out of {questions.length}
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}
