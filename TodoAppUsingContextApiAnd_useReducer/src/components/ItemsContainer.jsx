import React from 'react'
import { Items } from './Items'
import { useContext } from 'react'
import { myContext } from '../myContext'


export function ItemsContainer() {    

    const {listItems} = useContext(myContext)
    return (
        <>
            {listItems.map((it,index) => <Items key={index} type= {it.name} dueDate = {it.date} />)}
        </>
    )
}
