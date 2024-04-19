import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter]  = useState(0)

  const addnum = () => {
    if(counter<20) {
      counter = counter+1;
      setCounter(counter);
      console.log(`change in counter which is our state`,counter);
    }
  
  }
  const remnum = () => {
    if(counter>0) {
    // counter = counter-1;
    // setCounter(counter);
    setCounter(preState => preState - 1)  
    console.log(counter);
    }
    
  }


  return (
    <>
      <button onClick={addnum}>count++ {counter} </button>
      {/* <button onClick={() => setCount(pre => pre +1)}>count++{count}</button> */} this is also an way to set count while taking its previous state 
      <button onClick={remnum}>count-- {counter} </button>
      <p>coffee and code</p>
    </>
  )
}

export default App
