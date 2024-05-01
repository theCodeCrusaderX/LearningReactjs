import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react';
import { myContext } from '../myContext';
// import { useState } from 'react'

export function Add({}) {

    const {handleNewItem} = useContext(myContext)
    // const [input,setInput] = useState('')
    // const [date,setDate] = useState('') 

    const inputVal = useRef();
    const dueDate = useRef();
    
    // const handleNameChange = (e) => {
    //     setInput(e.target.value)
    // }

    // const handleDateChange = (e) => {
    //     setDate(e.target.value)
    // }

    const handleClick = () => {

        const todoName = inputVal.current.value
        const todoDate = dueDate.current.value

        // console.log(`name ${todoName} , date ${todoDate}`)
        handleNewItem(todoName,todoDate)
        
        inputVal.current.value =''
        dueDate.current.value = ''
        
        // handleOnClick(input,date)
        // setInput("")
        // setDate("")
    }
    
    return (
        <>
            <h1 className='text-2xl font-bold'>Todo App</h1>

            <input 
            className='border-2 border-black text-center m-4' 
            type="text" 
            placeholder='Type your todo here' 
            // value={input}
            ref={inputVal}
            />

            <input 
            className='border-2 border-black text-center mr-4' 
            type="date" 
            name="" 
            id="" 
            // value={date}
            ref={dueDate}
            />

            <button className='bg-green-500 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Add</button>
        </>
    )
}
