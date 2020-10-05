import React, { useState } from 'react';
import playersJSON from '../players.json';
import Header from './Header';
import Player from './Player';

const App = () => {
  const initialState = [...playersJSON];
  const [players, setPlayers] = useState(initialState);

  const handleRemovePlayer = (id) => setPlayers(players.filter(p => p.id !== id));

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player) => (
        <Player 
          key={player.id.toString()}
          id={player.id}
          name={player.name}
          removePlayer={handleRemovePlayer}
        />
      ))}
    </div>
  );
}

export default App;