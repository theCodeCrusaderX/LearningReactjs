import { Add } from './components/Add'
import { Items } from './components/Items'
import './App.css'

function App() {

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='max-w-lg bg-slate-400'>
          <Add />
          <Items type = "morning workout" date = "22-04-2024" />
          <Items type = "yoga" date = "22-04-2024"/>
        </div>
      </div>
      
      
    </>
  )
}

export default App
