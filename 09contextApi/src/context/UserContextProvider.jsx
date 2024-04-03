
//here we are creating contextProvider:-

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user,setUser] = React.useState(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children} 
        </UserContext.Provider>
    )                             //children is a generic name you can also put any other name it             
}                                   // means that you are wrapping all the component in context provider                                   
export default UserContextProvider;     //here value is another prop through which you can give the value 
                                        //to the component.