import React, { useState } from "react";

const AddPlayerForm = ({ addPlayer }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a player's name"
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
