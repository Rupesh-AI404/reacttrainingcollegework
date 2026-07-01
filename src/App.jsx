import React from 'react'
import MyRoutes from './MyRoutes.jsx'

const App = () => {
  return (
    
    <div> 
        <Provider store={myStore}>
          
        <MyRoutes />
        </Provider>
    </div>
  )
}

export default App