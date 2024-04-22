import React from 'react'

export function Random1() {
    

    let num = Math.floor(Math.random()*100);
    return (
        <>
            <h1 style={{background : 'red'}}>Random number is {num}</h1>
        </>
    )
}
