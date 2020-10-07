import React, { useState } from 'react';
import playersJSON from '../players.json';
import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';

const App = () => {
  const initialState = [...playersJSON];
  const [players, setPlayers] = useState(initialState);

  const handleAddPlayer = (name) => setPlayers([...players, {id: players.length + 1, name, score: 0}])
  const handleRemovePlayer = (id) => setPlayers(players.filter(p => p.id !== id));

  const handleScoreChange = (index, delta) => {
    const playersArr = [...players];
    playersArr[index].score += delta;
    setPlayers(playersArr);
  }
  
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />
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
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
}

export default App;
