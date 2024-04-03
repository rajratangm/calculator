

import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [text, setText] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        if (result.trim()==='=') {
          setResult('Error');
          // return;
        }
        // setResult(eval(result));
       
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setText('');
    } else {
      setResult(prevResult => prevResult + value);
      setText(prevTest => prevTest + value);
    }
  };

  const calculate = () => {

    try {setResult(eval(result));}
    catch(e){
      setResult('Error')
    }
    // setText(result)
  };

  return (
    <div className='container'>
      <form>
        <input type='text' value={text} readOnly />
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


// import "./styles.css";

// import React, { useState } from "react";

// function App() {
//   const [displayValue, setDisplayValue] = useState("");
//   const [result, setResult] = useState("");

//   const handleButtonClick = (value) => {
//     if (value === "=") {
//       try {
//         const calculatedResult = eval(displayValue);
//         setResult(calculatedResult);
//       } catch (error) {
//         setResult("Error");
//       }
//     } else if (value === "C") {
//       setDisplayValue("");
//       setResult("");
//     } else {
//       setDisplayValue((prevValue) => prevValue + value);
//     }
//   };

//   return (
//     <div className="App">
//       <input type="text" value={displayValue} readOnly />
//       <div>{result}</div>
//       <div className="buttons">
//         {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "/", "=", "C"].map(
//           (value, index) => (
//             <button key={index} onClick={() => handleButtonClick(value)}>
//               {value}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
