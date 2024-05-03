import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false)

  const increaseCounterVal = () => {
    setCounter(counter + 1);
    setError(false)
  }

  const decreaseCounterVal = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    } else {
      setError(true)
    }
  }
  return (
    <div data-test="component-app">
      <h3 data-test='counter-test'>Current counter value <span data-test="count">{counter}</span></h3>
      {error ? <h3>You can not set the counter value less then zero</h3>: null}
      <input data-test='increment-button' type="button" value="increment" onClick={() => increaseCounterVal()} />
      <input data-test='decrement-button' type="button" value="decrement" onClick={() => decreaseCounterVal()} />
    </div>
  );
}

export default App;
