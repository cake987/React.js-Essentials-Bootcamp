import React, { useState } from 'react';
import './App.css';

function GreetingCard() {
  const [name, setName] = useState('User');

  const handleChangeName = () => {
    const newName = prompt('Enter your name:');
    if (newName) {
      setName(newName);
    }
  };

  return (
    <div className="card">
      <h2 className="greeting">Hello, {name}!</h2>
      <button className="change-btn" onClick={handleChangeName}>
        Change Name
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GreetingCard />
    </div>
  );
}

export default App;
