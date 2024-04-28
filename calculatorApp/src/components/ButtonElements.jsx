import React from 'react'

export function ButtonElements({btnEle, handleClick}) {
    

    return (
        <>
            {btnEle.map(item => <button key={item} onClick={() => handleClick({item})} className='h-16 w-16 text-3xl m-3'>{item}</button>)}
        </>
    )
}
