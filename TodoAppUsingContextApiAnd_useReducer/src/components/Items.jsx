import React from 'react'
import { useContext } from 'react'
import { myContext } from '../myContext'
export function Items({type, dueDate}) {
    
    const {handleDeleteButton} = useContext(myContext)

    return (
        <>
            <div className='flex justify-between mb-2' >
                <p className='w-1/3 ml-4'>{type}</p>
                <p className=' max-w-28 '> {dueDate} </p>
                <button className=' bg-red-600 text-white font-bold py-1 px-2 rounded' onClick={() => handleDeleteButton(type)}>Delete</button>
            </div>
            
        </>
    )
}

