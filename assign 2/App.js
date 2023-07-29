import React,{useState} from "react";
import "./style.css";

const initialState = [
  {
    person: "Raju",
    age: 72
  },
  {
    person: "Nattu lal",
    age: 28
  }
];

const green = "#39D1B4";
const yellow = "#FFD712";

function Person({ person, onClick, color, index }) {
  return (
    <>
      <h3>My name is {person.person}</h3>
      <h3>My age is {person.age}</h3>
      <button
        style={{ backgroundColor: color }}
        color={color}
        name={person.person}
        onClick={onClick}
        index={index}
      >
        Change color
      </button>
      {index}
    </>
  );
}

export default function App() {
  const [person, setPerson] = useState(initialState);
  const [buttonColor, setButtonColor] = useState({0:green,1:green});

  function handleColorChange(e,i) {
    console.log(i)
    const button = e.target.style.backgroundColor;
    const newButton = e.target.style.backgroundColor;

    const newColor = buttonColor[i] === green ? yellow : green;
    const newState ={...buttonColor,[i]:newColor}
    setButtonColor(newState);
  }

  return (
    <div className="App">
      {person.map((per, i) => {
        return (
          <Person
            color={buttonColor[i]}
            key={i}
            index={i}
            onClick={(e) => handleColorChange(e,i)}
            person={per}
          />
        );
      })}
    </div>
  );
}
