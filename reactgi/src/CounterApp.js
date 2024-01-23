// CounterApp.js
import React, { useState } from 'react';

const CounterApp = () => {
  // State to track the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CounterApp;
