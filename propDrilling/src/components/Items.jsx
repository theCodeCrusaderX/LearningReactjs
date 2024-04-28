import React from 'react'
import { ErrorHandling } from './ErrorHandling'
import { Item } from './Item'

export function Items({val})  //accepting the props send by parent
{
    const handleBuyButton = () => {
        
    }
    
    return (
        <>
<<<<<<< HEAD
            <ErrorHandling items = {val}/>  {/* passing props to grand child  */}
=======
            <ErrorHandling items = {val}/>  {/*passing props to grand child  */}
>>>>>>> 54558c6815e5e3a11ae95563782be92b488b4a5c
            <ul>
                {val.map((item) => <Item key={item} item = {item} handleBuyButton={handleBuyButton}/>)}
            </ul>
        </>
    )
}
