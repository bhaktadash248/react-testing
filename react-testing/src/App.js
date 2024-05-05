import React from 'react';

import Input from './Input';
import Congrts from './Congrts';
import GuessedWords from './GuessedWords';

const App = () => {
  return (
    <div className="container" data-test='jotto-container'>
      <div className='row'>
        <h3 className='text-center p-3'>Jotto App</h3>
        <Congrts />
        <Input />
        <GuessedWords/>
      </div>
    </div>
  );
}

export default App;
