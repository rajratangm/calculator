import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult]= useState('')
  return (
    <>
    <div className='container'>
      <form>
        <input type='text' value={result}/>
      </form>
      <div className='keypad'>
        <button>7</button>
        <button></button>
        <button></button>
        <button></button>

        <button></button>
        <button></button>
        <button></button>
        <button></button>

        <button></button>
        <button></button>
        <button></button>
        <button></button>

        <button></button>
        <button></button>
        <button></button>
        <button></button>

      </div>
    </div>
    
    </>
  );
}

export default App;
