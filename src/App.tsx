import React from 'react';
import {FaDiceD20} from 'react-icons/fa';
import {DiceRoller} from './components/DiceRoller';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        Dice Roller

        <button className="btn-roll-die">
        <FaDiceD20 />  Roll Die
        </button>
      </header>
      {DiceRoller}
    </div>
  );
}

export default App;
