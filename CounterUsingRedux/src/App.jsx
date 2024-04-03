import './App.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slices/counter/Index'

function App() {

  

  return (
    <>
     <h1>counter App Using Redux and Redux toolkit</h1>
     <button onClick={() => dispatch(increment())}>
      Increment
     </button>
     <button onClick={() => dispatch(decrement())}>
      Decrement
     </button>
    </>
  )
}

export default App
