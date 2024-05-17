import React, { useEffect, useState } from 'react'

export function App() {
  const date = new Date();
  const [currdate,setDate] = useState(date)

  useEffect(()=> {
    setDate(new Date)
  },[currdate])

  return (
    <>
      {`${date.getFullYear()}-${date.getMonth()}-${date.getDay()} and the current time is ${date.getSeconds()}`}
    </>
  )
}
