import React from 'react'
import { ErrorHandling } from './ErrorHandling'

export function Items({val})  //accepting the props send by parent
{
    
    return (
        <>
            <ErrorHandling items = {val}/>  //passing props to grand child 
            <ul>
                {val.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}
