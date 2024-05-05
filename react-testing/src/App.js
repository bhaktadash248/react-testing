import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <form className='input-group'>
            <input className='form-control' type='text' placeholder='Type some text' />
            <input className="btn btn-primary" type='button' value='submit' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
