import React from 'react'
import { useSelector } from 'react-redux'

const ReduxCounter = () => {

    let counterStore = useSelector(store => store)
    let counter = counterStore.count

  return (
    <div className='flex justify-center items-center h-screen'>
        <h1>Count: {counter}</h1>
    </div>
  )
}

export default ReduxCounter