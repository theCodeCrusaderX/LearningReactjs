import { Items } from './components/Items'
import './App.css'

function App() {

  const foodItems = ['milk','bread','chicken','mutton','rice']   //parent list

  return (
    <>
      <h2>Healthy Food Items</h2>
      <Items val = {foodItems} />   {/*passing parent list to child*/}
      
    </>
  )
}

export default App
