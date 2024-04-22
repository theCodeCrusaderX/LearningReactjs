import React from 'react'

export function ErrorHandling({items}) //accepting props from child 
{
    
    return (
        <>
            { items.length === 0 && <h1>Array is empty</h1> }
        </>
    )
}
