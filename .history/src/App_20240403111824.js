import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult]= useState('')
  const handleClick=(e)=>{
    setResult(result.concat(e.target.name))

  }
  return (
    <>
    <h1>Calculator</h1>
    
    <div className='container'>
      <form>
        <input type='text' value={result}/>
      </form>
      <div className='keypad'>
        <button  onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>

        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>*</button>

        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>=</button>
        <button onClick={handleClick}>/</button>

      </div>
    </div>
    
    </>
  );
}

export default App;
