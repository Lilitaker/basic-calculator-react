import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>My calculator in React</h1>
      <div className='calculator-container'>
        <Screen />
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
        <ClearButton>Clear</ClearButton>
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
*/