import React from 'react'
import { useContext } from 'react'
import { myContext } from '../myContext'

export function EmptyMessage() {
    const {listItems} = useContext(myContext)

    return (
        <>
            {listItems.length === 0 && <p>empty items!</p>}
        </>
    )
}
