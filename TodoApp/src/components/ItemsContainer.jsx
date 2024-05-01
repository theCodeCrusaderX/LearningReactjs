import React from 'react'
import { Items } from './Items'

export function ItemsContainer({listItems,handleDeleteButton}) {
    

    return (
        <>
            {listItems.map((it,index) => <Items key={index} type= {it.name} dueDate = {it.date} handleDeleteButton= {handleDeleteButton} />)}
        </>
    )
}
