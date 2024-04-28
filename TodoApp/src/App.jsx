import { Add } from './components/Add'
import './App.css'
import { ItemsContainer } from './components/ItemsContainer'

function App() {

  const listItems = [
    {
      name:"go to college",
      date:"26-04-2024"
    },
    {
      name:"buy milk",
      date:"26-04-2024"
    }
  ]

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='max-w-lg bg-slate-400'>
          <Add/>
          <ItemsContainer listItems= {listItems} />
        </div>
      </div>
      
      
    </>
  )
}

export default App
