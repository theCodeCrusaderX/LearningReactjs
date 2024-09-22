import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'   //this do some preprocessing to load the data

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')    //we can also do like this 
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {                          //most fast way 
    const response = await fetch('https://api.github.com/users/Dinesh726544')
    return response.json()
}