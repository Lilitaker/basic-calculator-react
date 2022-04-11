import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value); //concatenation
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("You need to enter numeric values to do the calculation.");
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>My calculator in React</h1>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={result}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
        <ClearButton manageClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
Step 2:
- Create divs for each row of the calculator
- Import Button component
- Add Button components inside each row with their values

Step 4:
- Add Screen component

Step 6:
- Add ClearButton component

Step 7:
- Add the useState hook to update the value of the Screen component, and add the prop to the tag
- Create the addInput function using setInput()
- We add addInput as a value for the manageClick prop in all the Button components (we add props). We don't add parentheses for addInput (inside the brackets) because I just want to pass the function to the Button components to call it from there

Step 9:
- Add the function manageClear directly to the ClearButton component 

Step 11:
- Install and inport Mathjs package
- Create a function to do the math operation when user clicks on = and a conditional to avoid users enter = before than a number
- Change the value of = Button for the result function name
*/

/* 
My own:

Step 12:
- 
*/