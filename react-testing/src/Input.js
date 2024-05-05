import React, { useState } from 'react';
import  PropTypes from 'prop-types';

const Input = (secretWord) => {

  const [currentGuess, setCurrentGuess] = useState("")

  return (
    <div className="p-3">
    <div className='col' data-test='component-input'>
      <form className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Type some text'
          data-test='input-box'
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)} 
          />
        <input
          data-test='submit-button'
          className="btn btn-primary"
          type='button'
          value='submit'
          onClick={(evt) => {
            evt.preventDefault()
            setCurrentGuess("")
          }}
        />
      </form>
    </div>
    </div>
  )
}

Input.prototype = {
  secretWord : PropTypes.string.isRequired
}

export default Input;