import React, { memo } from "react";
import Counter from "./Counter";

const Player = ({ id, index, name, score, changeScore, removePlayer }) => {
  console.log(name + " rendered");

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>
      <Counter id={id} index={index} score={score} changeScore={changeScore} />
    </div>
  );
};

const MemoPlayer = memo(Player, (prevProps, nextProps) => prevProps.score === nextProps.score ? true : false)

export default MemoPlayer;
