import React from 'react'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './pages/About'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>,
    },
    {
      path: '/projects',
      element:<ProjectsPage/>,
    },
    {
      path: '/about',
      element:<About/>,
    },
  ]);

  return (
    <div className=' '>
       
      <RouterProvider router={router}/>
      
      

    </div>
  )
}

export default App
