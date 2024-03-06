import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter]  = useState(15)

  const addnum = () => {
    if(counter<20) {
      counter = counter+1;
      setCounter(counter);
      console.log(counter);
    }
  
  }
  const remnum = () => {
    if(counter>0) {
    counter = counter-1;
    setCounter(counter);
    console.log(counter);
    }
    
  }


  return (
    <>
      <button onClick={addnum}>count++ {counter} </button>
      <button onClick={remnum}>count-- {counter} </button>
      <p>coffee and code</p>
    </>
  )
}

export default App
