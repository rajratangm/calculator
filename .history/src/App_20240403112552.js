import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult]= useState('')
  const handleClick=(value)=>{
    setResult(result.concat(value))
  }

  const clear=()=
  return (
    <>
    <h1>Calculator</h1>
    <p>{result}</p>
    <div className='container'>
      <form>
        <input type='text' value={result}/>
      </form>
      <div className='keypad'>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={clear} id='clear'>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')} id= 'enter'>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
    
    </>
  );
}

export default App;
