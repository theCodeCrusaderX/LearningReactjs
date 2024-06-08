import { useContext } from 'react'   // to use context api
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'  //name of created context
import './App.css'

function App() {

  const counterState = useContext(CounterContext)  //here we used the context

  console.log("counter", counterState);

  return (
    <>
     <h1>learning context api using counter App</h1>
     <h2>count is {counterState.count} </h2>
     <Counter/>
    </>
  )
}

export default App
