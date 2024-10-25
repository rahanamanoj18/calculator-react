import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); 

  
  const displayContent = (value) => {
    setInput(input + value);
  };

  const clearScreen = () => {
    setInput(''); 
  };

  
  const removeLastDigit = () => {
    setInput(input.slice(0, -1)); 
  };

  const calculateResult = () => {
  
      const result = eval(input); 
      setInput(result.toString()); 
    
  };




  return (
    <div style={{ width: '100%', height: '100vh' }} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{ width: '400px', background: 'orange' }} className='rounded p-5'>
        <div className='p-5 bg-light rounded'>
          <button  name='result' className="bg-dark form-control p-4 text-white">
            {input}
          </button>
          <div className='grid'>
              <button onClick={clearScreen} className='p-2 rounded mt-2 '>AC</button>
              <button onClick={removeLastDigit} className='p-2 rounded mt-2 ms-2'>DEL</button>
              <button onClick={()=>displayContent('/')} className='p-2 rounded mt-2 ms-2'>/</button>
          </div>
          <div className='grid2'>
                <button onClick={()=>displayContent('7')} className='p-2 rounded mt-1 '>7</button>
                <button onClick={()=>displayContent('8')} className='p-2 rounded mt-1 ms-2'>8</button>
                <button onClick={()=>displayContent('9')} className='p-2 rounded mt-1 ms-2'>9</button>
                <button onClick={()=>displayContent('')} className='p-2 rounded mt-1 ms-2'></button>
          </div>
          <div className='grid3'>
                <button onClick={()=>displayContent('4')} className='p-2 rounded mt-1 '>4</button>
                <button onClick={()=>displayContent('5')} className='p-2 rounded mt-1 ms-2'>5</button>
                <button onClick={()=>displayContent('6')} className='p-2 rounded mt-1 ms-2'>6</button>
                <button onClick={()=>displayContent('+')} className='p-2 rounded mt-1 ms-2'>+</button>
          </div>
          <div className='grid4'>
                <button  onClick={()=>displayContent('1')} className='p-2 rounded mt-1 '>1</button>
                <button   onClick={()=>displayContent('2')}className='p-2 rounded mt-1 ms-2'>2</button>
                <button  onClick={()=>displayContent('3')} className='p-2 rounded mt-1 ms-2'>3</button>
                <button  onClick={()=>displayContent('-')} className='p-2 rounded mt-1 ms-2'>-</button>
          </div>
          <div className='grid'>
                <button  onClick={()=>displayContent('0')} className='p-2 rounded mt-1 '>0</button>
                <button  onClick={()=>displayContent('.')} className='p-2 rounded mt-1 ms-2'>.</button>
                <button onClick={calculateResult} className='p-2 rounded mt-1 ms-2'>=</button>
                
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;