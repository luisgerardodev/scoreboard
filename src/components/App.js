import React, { useState } from "react";
import playersJSON from "../players.json";
import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

const App = () => {
  const initialState = [...playersJSON];
  const [players, setPlayers] = useState(initialState);

  const handleAddPlayer = (name) =>
    setPlayers((prevState) => [
      ...prevState,
      { id: prevState.length + 1, name, score: 0 },
    ]);
    
  const handleRemovePlayer = (id) =>
    setPlayers((prevState) => prevState.filter((p) => p.id !== id));

  const handleScoreChange = (id, delta) => {
    setPlayers((prevState) => {
      const playersArr = [...prevState];
      playersArr.find((p) => p.id === id).score += delta;
      return playersArr;
    });
  };



  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />
      {players.map(player => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          highScore={Math.max.apply(Math, players.map(p => p.score))}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
