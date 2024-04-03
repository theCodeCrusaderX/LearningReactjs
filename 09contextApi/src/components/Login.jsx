import React, { useState } from 'react'
import { useContext } from 'react';

import UserContext from '../context/UserContext';

export function Login() {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({password,username})  
        console.log({password,username})      //here we are trying to put data in my context
    }

    return (
        <>
            <h2>Login</h2>
            <input 
            type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            {" "}
            <input 
            type="text"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
