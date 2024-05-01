import { Add } from './components/Add'
import { EmptyMessage } from './components/EmptyMessage'
import './App.css'
import { ItemsContainer } from './components/ItemsContainer'
import TodoItemsContexProvider from './myContext'
function App() {  

  return (
    <>
      <TodoItemsContexProvider>
          <div className='flex items-center justify-center'>
            <div className='max-w-lg bg-slate-400'>
              <Add/>
              <EmptyMessage/>
              <ItemsContainer/>
            </div>
          </div>
      </TodoItemsContexProvider>
    </>
  )
}

export default App
