import React, { useState } from 'react';
import playersJSON from '../players.json';
import Header from './Header';
import Player from './Player';

const App = () => {
  const initialState = [...playersJSON];
  const [players, setPlayers] = useState(initialState);

  const handleRemovePlayer = (id) => setPlayers(players.filter(p => p.id !== id));

  const handleScoreChange = (index, delta) => {
    const playersArr = [...players];
    playersArr[index].score += delta;
    setPlayers(playersArr);
  }
  
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player, index) => (
        <Player 
          key={player.id.toString()}
          index={index}
          id={player.id}
          name={player.name}
          score={player.score}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
    </div>
  );
}

export default App;
