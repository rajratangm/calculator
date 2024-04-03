import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [test, setText]= useState('')

  const handleClick = (value) => {
    if (value === '=') {
      try {
        if (!result.trim()) {
          setResult('Error');
          return;
        }
        setResult(eval(result));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(prevResult => prevResult + value);
      setText(prevTest=> prevTest+value)
    }
  };

  const calculate=()=>{
    setResult(eval(result))
    // setText(result)
  }

  return (
    <div className='container'>
      <form>
        <input type='text' value={te} readOnly />
      </form>
      <p>{result}</p>
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

        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
