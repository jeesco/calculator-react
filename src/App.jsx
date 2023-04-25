
import './App.css'
import { useState } from 'react'
import { evaluate } from 'mathjs';
import logo from './images/Jeesco.png'
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

function App() {

  const [input, setInput] = useState('')

  function addInput(val) {
    setInput(input + val)
  }


  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert('please enter a valid input')
    }
  };

  const deleteChar = () => {
    setInput(input.substr(0, input.length - 1))
  }

  return (
    <div className="App">

      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <ClearButton 
            handleClear={() => setInput('')} >
            Clear
          </ClearButton>
          <ClearButton
          handleClear={deleteChar}>
            ◀
          </ClearButton>
        </div>
        <footer className='footer'>
          <p>Made by <a href='https://twitter.com/jeesco25'>Juan Escobar</a> with React</p>
          <div className='logo-container'>
            <img src={logo} className='logo' alt='logo' />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
