import React from 'react'

export function Add({handleClick}) {
    
    return (
        <>
            <h1 className='text-2xl font-bold'>Todo App</h1>
            <input className='border-2 border-black text-center m-4' type="text" placeholder='Type your todo here'/>
            <input className='border-2 border-black text-center mr-4' type="date" name="" id="" />
            <button className='bg-green-500 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Add</button>
        </>
    )
}
