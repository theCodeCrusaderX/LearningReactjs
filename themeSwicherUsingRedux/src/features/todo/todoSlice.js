import { createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = { 
    todos : [{
        id:1,
        text:"todo"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id: id.nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) //It assumes that the action.payload directly contains the id. However, if the payload contains more than just the id (which is often the case), your alternative approach:
        },

        // updateTodo: (state, action) => {
        //     const updatedTodos = state.todos.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             return { ...todo, text: (action.payload.text) }; // Keep all properties of the todo, only update the text
        //         }
        //         return todo; // For todos other than the one being updated, return unchanged
        //     });
        //     state.todos = updatedTodos;
        // }
        
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer