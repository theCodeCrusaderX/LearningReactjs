import { Items } from './components/Items'
import './App.css'
import { InputBox } from './components/InputBox'
import { useState } from 'react'

function App() {

  // const foodItems = ['sbzi','bread','chicken','mutton','rice'] 
  


  let [foodItems,setFoodItems] = useState([])
  let [text,setText] = useState('hello')

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value) 
  }

  const handleKey = (e) => {
    if(e.key === "Enter") {
      let updatedList = [...foodItems,e.target.value]
      e.target.value = ''
      setFoodItems(updatedList)
      setText('')
    }
  }

  return (
    <>
      <h2>Healthy Food Items</h2>
      <InputBox handleOnChange={handleOnChange} handleKey= {handleKey} />
      <p>{text}</p>
      <Items val = {foodItems} />   {/*passing parent list to child*/}
      <Items val = {foodItems} />   {/*passing parent list to child*/}
      
    </>
  )
}

export default App