import React from 'react'

const Input = () =>{
    return(
        <div className='col'>
          <form className='input-group'>
            <input className='form-control' type='text' placeholder='Type some text' />
            <input className="btn btn-primary" type='button' value='submit' />
          </form>
        </div>
    )
}

export default Input;