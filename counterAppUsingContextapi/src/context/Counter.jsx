//we have created our context

import { createContext,useState } from "react";

export const CounterContext = createContext(null);

//now we need to create contextProvider

export const CounterProvider = (props) => {

    const [count , setCount] = useState(1);

    return(
        <CounterContext.Provider value={{count ,setCount}}>  //we are giving the value in the form of object
            {props.children}
        </CounterContext.Provider>
    )
}

