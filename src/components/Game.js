export function Game({ step, question, handleClickVariant, questions }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((el, index) => (
          <li onClick={() => handleClickVariant(index)} key={index}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
