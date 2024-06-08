import './App.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount} from './features/counter/counterSlice'


function App() {

  const count = useSelector((state) => state.counter02.value)
  const dispatch = useDispatch()

  return (
    <>

     <h1>counter App Using Redux and Redux toolkit</h1>
      
     <h1>{count}</h1>
     <br />

     <button onClick={() => dispatch(increment())}>
      Increment
     </button>
     <button onClick={() => dispatch(decrement())}>
      Decrement
     </button>
     <button onClick={() => dispatch(incrementByAmount(5))}>
      incrementByAmount
     </button>
    </>
  )
}

export default App
