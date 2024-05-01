import { Add } from './components/Add'
import { EmptyMessage } from './components/EmptyMessage'
import './App.css'
import { ItemsContainer } from './components/ItemsContainer'
import { useState } from 'react'
import { myContext } from './myContext'

function App() {

  const [listItems,setListItems] = useState([])

  // const handleNewItem = (input,date) => {
  //   console.log(`name = ${input} date = ${date}`)
  //   let newListItem = [...listItems,{name : input,date : date}]
  //   setListItems(newListItem)
  // }

  const handleNewItem = (input,date) => {
    setListItems(pre => [...pre,{name : input,date : date}])
  }


  const handleDeleteButton = (type) => {
    console.log("delete button clicked!",type)
    const newListItem = listItems.filter(item => item.name !== type)
    setListItems(newListItem)
  }

  return (
    <>
      <myContext.Provider value={{listItems,handleNewItem,handleDeleteButton}}>
        <div className='flex items-center justify-center'>
          <div className='max-w-lg bg-slate-400'>
            <Add/>
            <EmptyMessage/>
            <ItemsContainer/>
          </div>
        </div>
      </myContext.Provider>
    </>
  )
}

export default App
