import React from 'react'

interface Props {

}

const Die = (props: Props) => {
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }

  return (
    <div>
      <h1>Dice Roller</h1>
      <div className="buttons">
  {[1, 2, 3, 4, 5].map(number => {
    let text = number === 1 ? "die" : "dice";
    return (
      <button
        key={number}
        onClick={() => this.diceRoll(number)}
        className="button"
      >
        {number} {text}
      </button>
    );
  })}
</div>
    </div>
  )
}

export default Die
