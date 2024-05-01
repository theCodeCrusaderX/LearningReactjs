import { createContext } from "react";

export const myContext = createContext(
    {
        listItems:[],
        handleNewItem:() => {},
        handleDeleteButton:() => {}
    }
);

