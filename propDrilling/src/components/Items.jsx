import React from 'react'
import { ErrorHandling } from './ErrorHandling'
import { Item } from './Item'

export function Items({val})  //accepting the props send by parent
{
    const handleBuyButton = () => {
        
    }
    
    return (
        <>
            <ErrorHandling items = {val}/>  {/* passing props to grand child  */}
            <ul>
                {val.map((item) => <Item key={item} item = {item} handleBuyButton={handleBuyButton}/>)}
            </ul>
        </>
    )
}
