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
      <div>
        
      </div>
    </div>
    
    </>
  );
}

export default App;
