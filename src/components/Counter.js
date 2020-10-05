import React, { useState } from 'react';

const Counter = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => setScore(score + 1);
  const decrementScore = () => setScore(score - 1);

  return (
    <div className="counter">
      <button
        type="button"
        className="counter-action decrement"
        onClick={decrementScore}
      >
        -
        </button>
      <span className="counter-score">{score}</span>
      <button
        type="button"
        className="counter-action increment"
        onClick={incrementScore}
      >
        +
        </button>
    </div>
  );
}

export default Counter;
