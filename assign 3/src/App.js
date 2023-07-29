import React, { useState } from 'react';
import './App.css';

function GreetingCard() {
  const [name, setName] = useState('John Doe');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="greeting-card">
      <h2>Hello, {name}!</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
        />
      </div>
    </div>
  );
}

export default GreetingCard;
