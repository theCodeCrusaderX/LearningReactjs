import React from 'react'

export function InputBox({val}) {
    

    return (
        <>
            <div className='w-[80%] h-16 m-4 bg-black ml-10 text-6xl' >
                <p>
                    {val}
                </p>
            </div>
        </>
    )
}
