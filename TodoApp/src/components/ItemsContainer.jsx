import React from 'react'
import { Items } from './Items'

export function ItemsContainer({listItems}) {
    

    return (
        <>
            {listItems.map(it => <Items type= {it.name} dueDate = {it.date} />)}
        </>
    )
}
