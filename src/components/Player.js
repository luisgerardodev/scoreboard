import React from 'react';
import Counter from './Counter';

const Player = ({ id, index, name, score, changeScore, removePlayer }) =>
  (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        {name}
      </span>
      <Counter index={index} score={score} changeScore={changeScore} />
    </div>
  );

export default Player;
