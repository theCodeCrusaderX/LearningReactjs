import React from 'react'

export function Item({item, handleBuyButton}) {
    
    // const handleBuyButton = (e) => {
    //     console.log(e)
    //     console.log(`${item} brougth`)
    // }

    return (
        <>
             <li key={item}>{item} <button onClick={handleBuyButton} >buy</button></li>
             
        </>
    )
}
