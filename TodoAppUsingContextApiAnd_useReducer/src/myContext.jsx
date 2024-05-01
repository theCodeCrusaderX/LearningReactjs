import { createContext } from "react";
import { useReducer } from "react";


export const myContext = createContext(
    {
        listItems:[],
        handleNewItem:() => {},
        handleDeleteButton:() => {}
    }
);


const todoItemsList = (state,action) => {
    let newListItem =state;
    if(action.type === "NEW_ITEM") {
      newListItem = [...state,{name : action.payload.input,date : action.payload.date}]
    }else if(action.type === "DELETE_ITEM") {
       newListItem = state.filter((item) => item.name !== action.payload.type)
    }
    return newListItem
}

const TodoItemsContexProvider = ({Children}) => {

const [listItems,dispatch] = useReducer(todoItemsList,[])

  const handleNewItem = (input,date) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: {
        input,
        date
      }
    }
    dispatch(newItem)
  }


  const handleDeleteButton = (type) => {

    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        type
      }
    }
    dispatch(deleteItem)
  }

  return (
    <>
      <myContext.Provider 
        value={{
          listItems,
          handleNewItem,
          handleDeleteButton
      }}>

        {Children}

      </myContext.Provider>
    </>
  )
}


export default TodoItemsContexProvider;





