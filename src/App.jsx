import React from 'react'
import { Provider } from 'react-redux'
import MyRoutes from './MyRoutes.jsx'
import myStore from '../redux/myStore.jsx'

const App = () => {
  return (
    <Provider store={myStore}>
      <MyRoutes />
    </Provider>
  )
}

export default App