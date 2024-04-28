import { useState } from 'react';
import './App.css'
import { ButtonElements } from './components/ButtonElements'
import { InputBox } from './components/InputBox';
function App() {

  const buttonEle = ['c','<-','cal','7','8','9','4','5','6','1','2','3','0','*','/','-','+','.']

  let [input,setInput] = useState("")

  const handleClick = (e) => {
    if(e.item === "c") {
      setInput("")
      
    }else if (e.item === "cal") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (e.item === "<-") {
      setInput(prevInput => prevInput.slice(0, -1));
    }else {
      console.log(e.item);
      const newVal = input + e.item
      console.log(newVal)
      setInput(newVal)
    }
    
  }

  return (
    <>
    <div className='max-w-sm bg-orange-500'>
      <h1 className='font-bold'>calculator App</h1>
      <InputBox val = {input} />
      <div>
        <ButtonElements btnEle = {buttonEle} handleClick={handleClick} />
      </div>
    </div>
      
    </>
  )
}

export default App
