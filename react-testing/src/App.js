import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounterVal = () => {
    setCounter(counter + 1)
  }
  return (
    <div data-test="component-app">
      <h3>Current counter value {counter}</h3>
      <input type="button" value="click" onClick={() => increaseCounterVal()} />
    </div>
  );
}

export default App;
