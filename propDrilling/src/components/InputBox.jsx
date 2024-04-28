import React from 'react'

export function InputBox({handleOnChange,handleKey}) {

    
    return (
        <>
            {/* <input onChange = {(e) => handelKey(e)} type="text" /> */}
            <input onChange = {handleOnChange} onKeyDown={handleKey} type="text" />
        </>
    )
}
