import React from 'react'

export function InputBox({val}) {
    

    return (
        <>
            <input type="text" value={val} className='w-[80%] h-16 m-4 bg-black text-6xl' readOnly/>
        </>
    )
}
