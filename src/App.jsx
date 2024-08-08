import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Notes from './components/Notes'
import About from './components/About'

//create a router

const router =createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path:'/notes',
    element:<Notes />
  },
  {
      path:'/about',
      element:<About />
    
  }

])

const App = () => {
  return <div>
    <RouterProvider  router={router}/>
    </div>
  
}

export default App;
