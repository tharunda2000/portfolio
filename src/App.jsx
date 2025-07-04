import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>,
    },
  ]);

  return (
    <div className=' '>
       
      <RouterProvider router={router}/>
      
      

    </div>
  )
}

export default App
