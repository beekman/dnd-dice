import React, { useState, useEffect } from "react";

const DiceRoller = () => {
  const [count, setCount] = useState(3);
  const [sides, setSides] = useState(20);
  const [result, setResult] = useState(null);

  // Simple function simulating a single die roll
  const roll = (sides: number): number => {
    return 1 + Math.floor(Math.random() * sides);
  };

  // Our "back-end" will roll a number of simulated dice,
  // possibly adding a bonus or subtracting a penalty.
  // It will return an object containing the rolls and their total.
  // (This is really for no reason other than to show off interfaces.)
  interface RollResult {
    rolls: number[];
    total: number;
  }

  // Roll a number of dice, and return the results,
  // using the object we defined above.
  const rollMany = (count: number, sides: number): RollResult => {
    let rolls: number[] = [];

    for (let i = 0; i < count; i++) {
      rolls.push(roll(sides));
    }

    let result = {
      rolls: rolls,
      total: rolls.reduce((a: number, b: number) => a + b, 0),
    };

    return result;
  };
};
